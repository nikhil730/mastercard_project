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
        <button className="button-88" onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default Start