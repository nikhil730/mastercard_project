import React from 'react'
import './description.css'

const DescriptionPage = () => {
  return (
    <div className="description">
       <div className="description__image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/India_geo_stub.svg" alt="india.png" />
       </div>
       <div className="description__data">
        <h1>India</h1>
        <p>analytical data .................</p>
       </div>
    </div>
  )
}

export default DescriptionPage