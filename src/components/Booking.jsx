import React, { useState } from 'react';

 
 const Booking = ({movie}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
     const [selectedTime, setSelectedTime] = useState('');
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
   const handleTimeChange = (e) => {
      setSelectedTime(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setName('');
      setEmail('');
      setSelectedTime('');
    };
  
   return (
     <div>
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="movie" key={movie.score}>Movie Name : {` All American`}</label> 
      </div>
      <div>
        <label htmlFor="movie">Movie Type : {  `Scripted`}</label> 
      </div>
      <div>
        <label htmlFor="movie">Movie Language : {` English`}</label> 
      </div>
      <div>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <select id="time" value={selectedTime} onChange={handleTimeChange}>
          <option value="">Select a time</option>
          <option value="time1">10:00 AM</option>
          <option value="time2">2:00 PM</option>
          <option value="time3">6:00 PM</option>
        </select>
      </div>
      <button type="submit">Book Movie</button>
    </form>
     </div>
   )
 }
 
 export default Booking