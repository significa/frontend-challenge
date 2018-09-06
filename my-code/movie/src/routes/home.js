import React from 'react'
import { Link } from 'react-router-dom'

import { Like, Faved } from '../components/like'

const Home = ({searchHandler, res, search, submit, props}) => (
    <div>
        <section className='searchBar'>
            <input
                type="text" 
                value={search} 
                placeholder='Search movies...'
                onChange={searchHandler }/>
            <button onClick={submit}>Click</button>
        </section>
        <section>
            {res && 
                <div className='movieGrid'>
                    {res.map(cur => (
                        <Link to={`/details/${cur.imdbID}`} className="movieCard" key={cur.imdbID} style={{backgroundImage: `url(${cur.Poster})`}}>
                            <div className="info">
                                <header><Like /></header>
                                <footer>
                                    <p className='title'>{cur.Title}</p>
                                    <p className='year'>{cur.Year}</p>
                                </footer>
                            </div>
                        </Link>
                        // <li className='movieCard' key={cur.imdbID}>
                        //     <a href={`details/${cur.imdbID}`}>
                        //         <img src={cur.Poster} alt=""/>
                        //     </a>
                        // </li>
                        // style={{backgroundImage: `url(${cur.Poster})`}}
                    ))}
                </div>
            }
        </section>
    </div>
)

export default Home