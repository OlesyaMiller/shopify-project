import React, { Component } from 'react';
import Movie from './Movie'

class Movies extends Component {
    render() {
        return (
            <div>
                {this.props.movies && (this.props.movies.map(movie => <Movie movie={movie}/>))} 
            </div>
        );
    }
}

export default Movies;