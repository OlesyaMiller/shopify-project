import React from 'react';

const Movie = (props) => {

    function nominateMovie(){
        props.nominateMovie(props.movie.imdbID)
    }

    return (
        <div>
            <p>Title:{props.movie.Title} Year of release: {props.movie.Year}</p>
            <img src={props.movie.Poster} />
            <p><button onClick={nominateMovie}>Nominate movie</button></p>
        </div>
    );
};

export default Movie;

