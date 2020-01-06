import React from 'react';
import './MovieCard.css';

function MovieCard({Movie}){
    
    return(
        <div className="MovieCard">
            <img alt="" src={Movie.img_src} />
            <p>Title: {Movie.title}</p>
            <br />
            <p>Premier: {Movie.premier}</p>
            <br />
            <p>Country: {Movie.country}</p>
            <br />
            <p>Language: {Movie.language}</p>
            <br />
        </div>
    );
}

export default MovieCard;