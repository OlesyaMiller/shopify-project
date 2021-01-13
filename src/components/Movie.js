import React from 'react';

const Movie = (props) => {

    function nominateMovie(){
        props.nominateMovie(props.movie.imdbID)
    }

    return (
        <div>
            <p>Title:{props.movie.Title} Year of release: {props.movie.Year}</p>
            <button onClick={nominateMovie}>Nominate movie</button>
        </div>
    );
};

export default Movie;

