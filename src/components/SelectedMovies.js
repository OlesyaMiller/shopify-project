import React, { Component } from 'react';
import SelectedMovie from './SelectedMovie';

// const key = "2f7ff25f"

class SelectedMovies extends Component {
    
    render() {

        // const filtered_movies = this.props.selectedMovies.filter(movie => movie !== null)
        // console.log(this.props.selectedMovies)
        return (
            <div>
                Inside selectedMovies
                {this.props.selectedMovies.map(movie => {
                    // return fetch((`http://www.omdbapi.com/?i=${id}&type=movie&apikey=${key}`))
                    // .then(movie => movie.json())
                    // .then(content => <SelectedMovie content={content}/>)
                    <SelectedMovie content={movie}/>
                })}
            </div>
        );
    }
}

export default SelectedMovies;