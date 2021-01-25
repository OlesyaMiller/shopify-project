import React from 'react';

const SelectedMovie = (props) => {
    return (
        <div>
            {props.content.imdbID}
        </div>
    );
};

export default SelectedMovie;