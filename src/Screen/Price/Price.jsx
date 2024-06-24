import React from 'react'
import nyc from "../../Assets/Backgrounds/nyc.JPG"
import wedding from "../../Assets/PIctures/DSC09345.JPG"
import "./Price.css"

function Price() {
  return (
    <div className='price-container'>
      <div className="title">
      <img className="price-img" src={nyc} alt="Background" />
      <div className="text-overlay">
        <h1>Pricing</h1>
        <h3>Packages and Products</h3>
      </div>
    </div>

      <div className='price-msg'>
        <h4 className='price-title'>Time flies, but memories last forever</h4>
        <p className='price-paragraph'>From the first smile to the adventurous steps into the world, each moment is a treasure. Our photography ensures these precious memories are beautifully preserved, allowing you to relive them for a lifetime.</p>
      </div>
      <div className='wed-container'>
        <img className='price-pic' src={wedding}  />
        <h2>Wedding Photography <i>-- $00</i></h2>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, ex?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eveniet.</li>
        </ul>
      </div>
      <div className='event-container'>
      <img className='price-pic' src={wedding}  /> 
      <h2>Make your Event Captured <i>-- $00</i></h2>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, ex?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eveniet.</li>
        </ul>
      </div>
      <div className='outdoor-container'>
      <img className='price-pic' src={wedding}  /> 
      <h2>Outdoor/Indoor Photography <i>-- $00</i></h2>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, ex?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eveniet.</li>
        </ul>
      </div>
    </div>
  )
}

export default Price