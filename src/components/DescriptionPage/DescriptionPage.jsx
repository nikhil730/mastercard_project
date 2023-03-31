import React from 'react'
import './description.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Paper, Typography, Divider } from "@material-ui/core";

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
  const name=locationstate.name;
  const description=locationstate.description;
  const imageurl="https://upload.wikimedia.org/wikipedia/commons/0/05/India_geo_stub.svg";
  //console.log(props);
  {/* <Button onClick={handleclick} className="button">Return</Button> */}
  return (
    // <div className="description">
    //    <div className="description__image">
    //     <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/India_geo_stub.svg" alt="india.png" />
    //    </div>
    //    <div className="description__data">
    //     <h1>{locationstate.name}</h1>
    //     <p>{locationstate.description}</p>
    //     <p>{locationstate.lat}</p>
    //     <p>{locationstate.lng}</p>
    //    </div>
    // </div>
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
    <div className="card">
      <div className="section">
        <Typography variant="h3" component="h2">
          {name}
        </Typography>
        <p className='coordinates'>Lat: {locationstate.lat} Lng: {locationstate.lng}</p>
        <Typography gutterBottom variant="body1" component="p">
          {description}
        </Typography>
        {/* <Typography variant="body1">{moment(createdAt).fromNow()}</Typography> */}
        <Divider style={{ margin: "20px 0" }} />
      </div>
      <div className="imageSection">
        <img
          className="media"
          src={
            imageurl ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt="map_image"
        />
      </div>
    </div>
    </Paper>
  )
}

export default DescriptionPage