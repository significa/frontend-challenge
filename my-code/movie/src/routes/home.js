import React from 'react'
import { Link } from 'react-router-dom'

import { Faved } from '../components/like'

const Home = ({searchHandler, res, search, props}) => (
    <div>
        <section className='searchBar'>
            <input
                type="text" 
                value={search} 
                placeholder='Search movies...'
                onChange={searchHandler }/>
            {/* <button className='btn' onClick={submit}>Click</button> */}
        </section>
        <section>
            {res && res.length > 0 &&
                <div className='movieGrid'>
                    {res.map(cur => (
                        <Link to={`/details/${cur.imdbID}`} className="movieCard" key={cur.imdbID} style={{backgroundImage: `url(${cur.Poster})`}}>
                            <div className="info">
                                <header><Faved /></header>
                                <footer>
                                    <p className='title'>{cur.Title}</p>
                                    <p className='year'>{cur.Year}</p>
                                </footer>
                            </div>
                        </Link>
                    ))}
                </div>
            }
            <div className="emptyState">No matches...</div>
        </section>
    </div>
)

export default Home