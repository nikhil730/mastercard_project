import React from 'react'
import { useLocation } from 'react-router-dom';

const Pages = () => {
  const location = useLocation();
  const prop = location.state;
  // console.log(prop.heading);
  return (
    <div className="pages">
      <h1>{prop.heading}</h1>
      <p>{prop.content}</p>
    </div>
  )
}

export default Pages