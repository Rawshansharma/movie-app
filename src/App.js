import './App.css';
import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import Booking from './components/Booking';
import {Routes, Route} from 'react-router-dom';

   
function App() {
  const [movie , SetMovie] = useState([])
  
  useEffect(  () => {
      fetch(`https://api.tvmaze.com/search/shows?q=all#`)
      .then (res => res.json())
      .then (data => {
        SetMovie(data);
         console.log(data);
       })
       .catch (err => console.log(err));
  }, []);
  return (
    <div className="App">
       <h1>React Movies Detail App Using API </h1>
        
       <Routes>
           <Route path="/booking" element={<Booking  movie ={movie}/>} />
        </Routes>
        
      {
        movie.map(movies =>(
          <Routes>
           <Route path="/" element={<MovieCard  key={movies.score} movies={movies}/> } />
           </Routes>
           ))
      }
      
     </div>
  );
}

export default App;
