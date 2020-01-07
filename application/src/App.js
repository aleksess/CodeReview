import React, {useState, useEffect} from 'react';

import './App.css';


import {MovieCard} from './components/MovieCard';
import Bar from './components/Bar/Bar';

function App() {
  const [movie, setMovie] = useState(null);
  const [dummy] = useState(true);
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

  }, [dummy]);



  return (
    <div className="App">
     
        <div ><Bar /></div>
        <div className="Floater"><MovieCard Movie={movie} /></div>
        <div className="Floater"><MovieCard Movie={movie} /></div>
        <div className="Clearer" />
      
      
    </div>
  );
}

export default App;
