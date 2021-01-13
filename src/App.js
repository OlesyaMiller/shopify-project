import './App.css';
import Movies from './components/Movies'
import Search from './components/Search'
import React, {Component} from 'react'

const key = "2f7ff25f"

class App extends Component {

  state = {
    movies: [],
    loading: false
  }

  fetchMovies = (query) => {
    fetch(`http://www.omdbapi.com/?s=${query}&type=movie&apikey=${key}`)
    .then(res => {return res.json()})
    .then(data => this.setState({
        movies: data.Search
    }))
  }

  render() {
    return (
      <div>
        <Search fetchMovies={this.fetchMovies}/>
        <Movies loading={this.state.loading} movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
