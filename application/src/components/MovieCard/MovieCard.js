import React from 'react';


function MovieCard({Movie}){
    
    return(
        <>
            {!!Movie && <div className="MovieCard">
            <img alt="" src={Movie.img_src} />
            <article>
                <p>Title: {Movie.title}</p>
                <br />
                <p>Premier: {Movie.premier}</p>
                <br />
                <p>Country: {Movie.country}</p>
                <br />
                <p>Language: {Movie.language}</p>
                <br />
            </article>
            <div className="Clearer"></div>
            </div>
            }
        </>
    );
}

export default MovieCard;