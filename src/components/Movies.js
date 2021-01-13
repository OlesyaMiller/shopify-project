import React, { Component } from 'react';

class Movies extends Component {
    render() {
        return (
            <div>
                {this.props.movies && (this.props.movies.map(movie => {return <p>Title:{movie.Title} Year of release: {movie.Year}</p>}))} 
            </div>
        );
    }
}

export default Movies;