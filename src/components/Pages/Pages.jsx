import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './pages.css';
import { Paper } from '@material-ui/core';

const Pages = () => {
  const location = useLocation();
  const prop = location.state;

  const history = useHistory();

  const handlePrevious = () =>{
    history.push('/secondPage');
  }

  const handleNext = () =>{
    history.push('/map');
  }

  return (
    <Paper className="paper" style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>

    <div className="pages">
      <h1>{prop.heading}</h1>
      <p>{prop.content}</p>
      <div className="buttons">
        <button className="previous" onClick={handlePrevious}>Previous</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
    </div>
    </Paper>
  )
}

export default Pages;
