import React, { Component } from 'react';

const key = "2f7ff25f"

class Movies extends Component {

    state = {
        movies: [],
        query: "",
        loading: true 
    }

    fetchMovies = (query) => {
        fetch(`http://www.omdbapi.com/?s=${query}&apikey=${key}`)
        .then(res => {return res.json()})
        .then(data => this.setState({
            movies: data.Search
        }))
    }

    componentDidUpdate(prevProps, prevState){
    // shouldComponentUpdate(){    
        this.fetchMovies(this.state.query)
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {

        // if (this.state.movies.length === 0) return null

        return (
            <div>
                <form>
                    <input name="query" type="text" value={this.state.query} onChange={this.inputHandler}/>
                </form>
                Inside Movies component.
        {this.state.movies && (this.state.movies.map(movie => {return <p>Title:{movie.Title} Year of release: {movie.Year}</p>}))}
            </div>
        );
    }
}

export default Movies;