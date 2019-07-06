import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSingleMovie } from '../API';
import Movie from '../components/Movie';

export class MoviePage extends Component{
    state = {
        movie: null
    };

   static propTypes = {
       match: PropTypes.shape({
           params: PropTypes.shape({
               id: PropTypes.string.isRequired
           }).isRequired
       }).isRequired
   };

    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const movie = await getSingleMovie(id).catch(error => {
            console.log(error);
        });        
        this.setState({
            movie
        })
    }

    render(){
        const { movie } = this.state;
        return movie
        ? <Movie movie={movie} /> 
        : <h1>Loading...</h1>;
    }
}

export default MoviePage;