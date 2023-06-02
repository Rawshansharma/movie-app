import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
 
  

const MovieCard = ({movies}) => {
    const navigate = useNavigate();
    const [summary , setSummary]= useState('')

    const navigateToBooking = () => {
        navigate('/booking');
          
      };

    const handleClick = () => {
       
      setSummary(movies.show.summary)
       
    };
    function changeSummary(myString) {
        return myString.replace( /(<([^>]+)>)/ig, '');
     }
   
  return (
  
    <div className='movie-card'>
        <h1>Movie Name : {movies.show.name}</h1>
        <img key={movies.score}  src={movies.show.image.original} alt="img" />
        <h2>Movie type : {movies.show.type}</h2>
        <h2>Movie Language : {movies.show.language}</h2>
       

         <button onClick={handleClick}  className='summary-btn'>Summary</button>
         <button onClick={navigateToBooking} className='summary-btn'>Booking</button>
         <p>{changeSummary(summary)}</p>

    </div>
     

    
  )
}

export default MovieCard