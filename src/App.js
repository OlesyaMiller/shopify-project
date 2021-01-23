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
    for (let i = 0; i < this.state.movies.length; i++) {
      let element = this.state.movies[i]
      if(element.imdbID === id){
        this.state.selected_movies.push(element)
        console.log(this.state.selected_movies)
        // Rerender NominationList here
      }  
    }
    // this.state.movies.map(movie => {
    //   return this.state.selected_movies.push(movie.imdbID === id ? movie.imdbID : null)
    // })
  }


  render() {
    return (
      <div>
        <Search fetchMovies={this.fetchMovies}/>
        <Movies loading={this.state.loading} movies={this.state.movies} nominateMovie={this.nominateMovie}/>
        <SelectedMovies selectedMovies={this.state.selected_movies}/>
      </div>
    )
  }
}

export default App;
