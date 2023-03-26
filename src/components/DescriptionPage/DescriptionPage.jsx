import React from 'react'
import './description.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const DescriptionPage = () => {
  const history=useHistory();
  const location=useLocation();
  const [locationstate,setLocationstate]=React.useState({name: "", description: "", lat: 0,lng: 0})

  const handleclick=()=>{
    history.push("/");
  }
  React.useEffect(()=>{
    console.log(location);

    if(location.state){
      //let _state=location.state as any
      setLocationstate(location.state);
    }
  },[location])

  //console.log(props);
  return (
    <div className="description">
       <Button onClick={handleclick} className="button">Return</Button>
       <div className="description__image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/India_geo_stub.svg" alt="india.png" />
       </div>
       <div className="description__data">
        <h1>{locationstate.name}</h1>
        <p>{locationstate.description}</p>
        <p>{locationstate.lat}</p>
        <p>{locationstate.lng}</p>
       </div>
    </div>
  )
}

export default DescriptionPage