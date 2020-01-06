import React, {useState, useEffect} from 'react';

import './App.css';
import MovieCard from './components/MovieCard/MovieCard';

//import {MovieCard} from './components/MovieCard';

function App() {
  const [movie, setMovie] = useState(undefined);
   useEffect(() => {
    const myFetch = async () =>{
      const response = await fetch('http://api.tvmaze.com/singlesearch/shows?q=batman');
      
      const ParsedResp = await response.json();
      console.log(ParsedResp);
      setMovie({
        title: ParsedResp.name,
        img_src: ParsedResp.image.medium,
        premier: ParsedResp.premiered,
        language: ParsedResp.language,
        country: ParsedResp.network.country.code
      });
    }
    myFetch();

  });



  return (
    <div className="App">
      <MovieCard Movie={{movie}} />
    </div>
  );
}

export default App;
