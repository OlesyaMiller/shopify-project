import React, { Component } from 'react'
import SelectedMovie from './SelectedMovie'

// const key = "2f7ff25f"

class SelectedMovies extends Component {
    
    render() {

        return (
            <div>
                Inside selectedMovies!!!
                {this.props.selectedMovies.map(movie => {
                    <SelectedMovie content={movie}/>
                })}
            </div>
        );
    }
}

export default SelectedMovies