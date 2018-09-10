import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Faved } from '../components/like'

class Details extends Component {

    componentDidMount() {
        this.props.fetch(this.props.match.params.id)
    }

    render() {
        const detail = this.props.detail
        const rotten = detail && detail.Ratings.every(c => c.Source === 'Rotten Tomatoes')
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
                            <div className='btn'>{`Rotten: ${rotten ? detail.Ratings.filter(c => c.Source === 'Rotten Tomatoes')[0].Value : 0}`}</div>
                            <div className='btn fav'><Faved /></div>                    
                        </div>
                        <div>
                            <div className="smallTitle">Plot</div>
                            <p>{detail.Plot}</p>
                        </div>
                        <div className='col-3'>
                            <div>
                                <div className="smallTitle">Actors</div>
                                {detail.Actors.split(',').map(act => <p className='m-0'>{act}</p>)}
                            </div>
                            <div>
                                <div className="smallTitle">Genre</div>
                                {detail.Genre.split(',').map(gen => <p className='m-0'>{gen}</p>)}
                            </div>
                            <div>
                                <div className="smallTitle">Director</div>
                                {detail.Director.split(',').map(dir => <p className='m-0'>{dir}</p>)}
                            </div>                            
                        </div>
                    </article>
                    
                    {/* <div>
                        <pre>{JSON.stringify(detail, null, ' ')}</pre>
                    </div> */}
                </div> 
                <div className="nav">
                    <Link to='/'>&larr;</Link>
                </div>              
                                
            </section>
        )
    }
}
  


export default Details

//<pre>{this.props.detail.Title}</pre>