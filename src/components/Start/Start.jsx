import React from 'react'
import './start.css'
import { useHistory } from 'react-router-dom';

const Start = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/secondPage');
    }
  return (
    <div className="start">
        <h3>Data Demons</h3>
        <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default Start