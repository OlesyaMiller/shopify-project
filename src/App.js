import './App.css';
import Movies from './components/Movies'
import Search from './components/Search'
import React, {Component} from 'react'
import SelectedMovies from './components/SelectedMovies'

const key = "2f7ff25f"

class App extends Component {

  state = {
    movies: [],
    loading: false,
    selected_movies: []
  }

  fetchMovies = (query) => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?s=${query}&type=movie&apikey=${key}`)
    .then(res => {return res.json()})
    .then(data => this.setState({
        movies: data.Search
    }))
    this.setState({loading: false})
  }

  nominateMovie = (id) => {
    this.state.movies.map(movie => {return this.state.selected_movies.push(movie.imdbID === id ? movie : null)})
  }

  render() {
    return (
      <div>
        <Search fetchMovies={this.fetchMovies}/>
        <Movies loading={this.state.loading} movies={this.state.movies} nominateMovie={this.nominateMovie}/>
        <SelectedMovies selectedMovieIds={this.state.selected_movies}/>
      </div>
    )
  }
}

export default App;
