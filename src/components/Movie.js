import React from 'react';

const Movie = (props) => {
    return (
        <div>
            <p>Title:{props.movie.Title} Year of release: {props.movie.Year}</p>
        </div>
    );
};

export default Movie;

