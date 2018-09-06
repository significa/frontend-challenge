import React, { Component } from 'react'

import { Like, Faved } from '../components/like'

class Details extends Component {

    componentDidMount() {
        this.props.fetch(this.props.match.params.id)
    }

    render() {
        const detail = this.props.detail
        return ( detail &&
            <div className='details'>
                <div>
                    <h1>{detail.Title}</h1>
                    <div>
                        <p>{`IMdb: ${detail.imdbRating}`}</p>
                        <p>{`Rotten: ${detail.Ratings.filter(c => c.Source === 'Rotten Tomatoes')[0].Value}`}</p>
                        <p className='fav'><Faved /></p>                    
                    </div>
                    <section>
                        <div className="title">Plot</div>
                        <p>{detail.Plot}</p>
                    </section>
                    <section>
                        <p>{detail.Actors}</p>
                        <p>{detail.Genre}</p>
                        <p>{detail.Director}</p>
                    </section>
                </div>
                <div>
                    <img src={detail.Poster} alt=""/>
                </div>
                {/* <pre>{JSON.stringify(detail, null, ' ')}</pre>                 */}
            </div>
        )
    }
}
  


export default Details

//<pre>{this.props.detail.Title}</pre>