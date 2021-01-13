import React, { Component } from 'react';

class Search extends Component {

    state = {
        movies: [],
        query: "",
        loading: true 
    }

    // fetchMovies = (query) => {
    //     fetch(`http://www.omdbapi.com/?s=${query}&type=movie&apikey=${key}`)
    //     .then(res => {return res.json()})
    //     .then(data => this.setState({
    //         movies: data.Search
    //     }))
    // }

    // componentDidUpdate(prevProps, prevState){
    // // shouldComponentUpdate(){   
    //     if (prevState !== this.state) {
    //         this.fetchMovies(this.state.query)
    //     }
    // }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.fetchMovies(this.state.query)
        this.setState({query: ""})
    }

    render() {

        // if (this.state.movies.length === 0) return null

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="query" type="text" value={this.state.query} onChange={this.inputHandler}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        );
    }
}

export default Search;