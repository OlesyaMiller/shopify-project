import React, { Component } from 'react';
import Movie from './Movie'

class Movies extends Component {
    render() {
        return (
            <div>
                {this.props.loading === true?<p>Loading...</p>:null}
                {this.props.movies && (this.props.movies.map(movie => <Movie nominateMovie={this.props.nominateMovie} movie={movie}/>))} 
            </div>
        );
    }
}

export default Movies;