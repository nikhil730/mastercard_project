import React from 'react'
import './description.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Paper, Typography, Divider } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
import img1 from "./img1.jpeg"
import img2 from "./img2.jpeg"
import img3 from "./img3.jpeg"
import img4 from "./img4.jpeg"

const DescriptionPage = () => {
  const history=useHistory();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log('selected index: ', selectedIndex)
    setIndex(selectedIndex);
  };
  const handlePrevious = () =>{
    history.push('/map');
  }
  const slides = [
    {
      image: {img1},
      title: "Avatar: The Way of Water",
      subTitle: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      interval: 1500
    },
    {
      image: {img2},
      title: "Black Adam",
      subTitle: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      interval: 1500
    },
    {
      image: {img3},
      title: "Black Panther: Wakanda Forever",
      subTitle: "Queen Ramonda, Shuri, MBaku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      interval: 1500
    }
  ];

  return (
    <div className="discription">
      <div>
      <button className="button-88 previous" onClick={handlePrevious}>Previous</button>
      </div>
    <Carousel activeIndex={index}
              onSelect={handleSelect}
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
    >
      
        <Carousel.Item key={img1} interval={slides[0].interval}>
          <img
            className="d-block w-100 "
            src={img1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item key={img2} interval={slides[1].interval}>
          <img
            className="d-block w-100"
            src={img2}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item key={img3} interval={slides[2].interval}>
          <img
            className="d-block w-100 "
            src={img3}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item key={img4} interval={slides[2].interval}>
          <img
            className="d-block w-100 "
            src={img4}
            alt="First slide"
          />
          
        </Carousel.Item>
      
    </Carousel>
    </div>

    
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
    // <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
    // <div className="card">
    //   <div className="section">
    //     <Typography variant="h3" component="h2">
    //       {name}
    //     </Typography>
    //     <p className='coordinates'>Lat: {locationstate.lat} Lng: {locationstate.lng}</p>
    //     <Typography gutterBottom variant="body1" component="p">
    //       {description}
    //     </Typography>
    //     {/* <Typography variant="body1">{moment(createdAt).fromNow()}</Typography> */}
    //     <Divider style={{ margin: "20px 0" }} />
    //   </div>
    //   <div className="imageSection">
    //     <img
    //       className="media"
    //       src={
    //         imageurl ||
    //         "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
    //       }
    //       alt="map_image"
    //     />
    //   </div>
    // </div>
    // </Paper>
    
    
    // <div className="slide-container">
    //     <Slide>
    //      {slideImages.map((slideImage, index)=> (
    //         <div key={index}>
    //           <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
    //             <span style={spanStyle}>{slideImage.caption}</span>
    //           </div>
    //         </div>
    //       ))} 
    //     </Slide>
    //   </div>
  )
}

export default DescriptionPage