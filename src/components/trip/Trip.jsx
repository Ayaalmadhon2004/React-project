import React from 'react'
//import "./trip.css"
import TripDate from './TripDate'
import pic1 from "../travel2.jpg"
import pic2 from "../travel3.jpg"
import pic3 from "../travel4.jpg"

const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps.</p>
        <div className='cards'>
        <div className='tripcard'>
            <TripDate 
            image={pic1}
            heading="Trip in Indonesia"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore vero eius enim exercitationem amet culpa accusantium veniam beatae soluta quas voluptas, nobis deserunt, dolorum libero, ullam facilis nam voluptate?
            "/>
        </div>
        <div className='tripcard'>
            <TripDate 
            image={pic2}
            heading="Trip in Turkey"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore vero eius enim exercitationem amet culpa accusantium veniam beatae soluta quas voluptas, nobis deserunt, dolorum libero, ullam facilis nam voluptate?
            "/>
        </div>
        <div className='tripcard'>
            <TripDate 
            image={pic3}
            heading="Trip in UAE"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore vero eius enim exercitationem amet culpa accusantium veniam beatae soluta quas voluptas, nobis deserunt, dolorum libero, ullam facilis nam voluptate?
            "/>
        </div>
        </div>
    </div>
  )
}

export default Trip
