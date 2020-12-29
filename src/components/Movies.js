import React, { Component } from 'react';

class Movies extends Component {

    state = {
        movies: ""
    }

    fetchMovies = () => {
        fetch("http://img.omdbapi.com/?apikey=756da7f2")
        .then(res => {return res.json()})
        .then(data => console.log("data", data))
    }

    componentDidMount(){
        this.fetchMovies()
    }

    render() {
        return (
            <div>
                Inside Movies component
            </div>
        );
    }
}

export default Movies;