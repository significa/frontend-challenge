import React, { Component } from 'react'
import SearchInput from '../components/searchInput';
import MovieCard from '../components/movieCard';
import logo from '../assets/images/logo.svg';
import { withRouter } from 'react-router-dom';
import EmptyStateManager from '../components/emptyStateManager';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      searchValue: '',
      loading: false,
      error: '',
      addedMovies: [],
    }
  }

  componentDidMount() {
    if(localStorage.getItem('addedMovies')) {
      const retrievedData = localStorage.getItem('addedMovies');
      const parseData = JSON.parse(retrievedData);
      this.setState({ addedMovies: parseData})
    }
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ searchValue: value,loading: true, error: '' },
      () => {
        this.fetchMovies(value);
      }
    );
  }

  fetchMovies(value) {
    fetch(`http://www.omdbapi.com/?apikey=a6487992&s=${value}` , {
      method: 'get',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then((response) => { return response.json(); })
    .then((response) => {
      if (response.Response === 'True') {
        this.setState({ data: response.Search, loading: false, error: '' })
      } else {
        this.setState({ data: [], loading: false, error: response.Error })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleAddButton = (id) => {
    console.log(this.state)
    if(this.state.addedMovies.includes(id)) {
      const newArr = this.state.addedMovies.filter((item) => { return item !== id })
      this.setState(() => { return { addedMovies: newArr } }, () => {
          localStorage.setItem('addedMovies', JSON.stringify(this.state.addedMovies));
      });

    } else {
      const newArr = this.state.addedMovies.concat(id)
      this.setState(() => { return { addedMovies: newArr } }, () => {
          localStorage.setItem('addedMovies', JSON.stringify(this.state.addedMovies));
      });
    }
  }

  renderContent() {
    if (this.state.loading) {
      return (<EmptyStateManager state={'loading'} />)
    }
    if (this.state.data.length > 0) {
      return (
        <div className="movie-card-container">
          <MovieCard data={this.state.data}
            handleAddButton={this.handleAddButton}
            addedMovies={this.state.addedMovies}
          /> 
        </div>
      )
    }else {
      return (<EmptyStateManager state={this.state.error} />)
    }
  }

  render() {
    return (
      <div>
        <img src={logo} className='logo' alt='logo' />
        <SearchInput handleChange={(e) => { this.handleChange(e) }} />
        {this.renderContent()}
      </div>
    )
  }

} 

export default withRouter(Home);

