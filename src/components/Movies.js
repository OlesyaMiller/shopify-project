import React, { Component } from 'react';

class Movies extends Component {

    state = {
        movies: "",
        query: ""
    }

    fetchMovies = (query) => {
        fetch(`http://www.omdbapi.com/?s=${query}&apikey=2f7ff25f`)
        .then(res => {return res.json()})
        .then(data => {this.setState({
            movies: data
        })})
    }

    componentDidUpdate(){
        this.fetchMovies(this.state.query)
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input name="query" type="text" value={this.state.query} onChange={this.inputHandler}/>
                </form>
                Inside Movies component
        {this.state.movies.map(movie => {return <p>{movie.title}</p>})}
            </div>
        );
    }
}

export default Movies;