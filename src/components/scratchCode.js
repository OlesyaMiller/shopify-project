import React, { useEffect, useState } from 'react';

const key = "2f7ff25f"

const Movies = () => {

    const [movies, getMovies] = useState([])

    const fetchMovies = (query) => {
        fetch(`http://www.omdbapi.com/?s=${query}&apikey=${key}`)
            .then(res => {return res.json()})
            .then(data => getMovies(data.Search))
    }
    console.log(movies, "movies")
    const [query, setQuery] = useState("")
    
    useEffect(()=> {
        fetchMovies(query)
    },[movies])

   
    //     this.setState({
    //         [e.target.name]: e.target.value 
    //     })
    // }

        // if (this.state.movies.length === 0) return null

        return (
            <div>
                <form>
                    <input name="query" type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
                </form>
                Inside Movies component
        {movies && (movies.map(movie => {return <p>Title:{movie.Title} Year of release: {movie.Year}</p>}))}
            </div>
        );
}

export default Movies;