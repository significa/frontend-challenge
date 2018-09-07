import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Like, Faved } from '../components/like'

class Details extends Component {

    componentDidMount() {
        this.props.fetch(this.props.match.params.id)
    }

    render() {
        const detail = this.props.detail
        return ( detail &&
            <section>
                <div className="nav">
                    <Link to='/'>&larr;</Link>
                </div>
                <div className='details'>             
                    <div className='poster'>
                        <img src={detail.Poster} alt=""/>
                    </div>
                    <article className='description'>
                        <div className='sub'>
                            <span>{detail.Runtime}</span>
                            <span>{detail.Year}</span>
                            <span>{detail.Rated}</span>
                        </div>
                        <h1 className='bigTitle'>{detail.Title}</h1>
                        <div className='btnBlock'>
                            <div className='btn'>{`IMdb: ${detail.imdbRating}`}</div>
                            <div className='btn'>{`Rotten: ${detail.Ratings.filter(c => c.Source === 'Rotten Tomatoes')[0].Value}`}</div>
                            <div className='btn fav'><Faved /></div>                    
                        </div>
                        <div>
                            <div className="smallTitle">Plot</div>
                            <p>{detail.Plot}</p>
                        </div>
                        <div>
                            <p>{detail.Actors}</p>
                            <p>{detail.Genre}</p>
                            <p>{detail.Director}</p>
                        </div>
                    </article>
                    
                    {/* <div>
                        <pre>{JSON.stringify(detail, null, ' ')}</pre>
                    </div> */}
                </div>               
                                
            </section>
        )
    }
}
  


export default Details

//<pre>{this.props.detail.Title}</pre>