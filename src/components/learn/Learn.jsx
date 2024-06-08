import React from 'react'
import "./learn.css"
import TripDate from '../trip/TripDate'
import pic1 from "../travel4.jpg"
import pic2 from "../travel3.jpg"
import pic3 from "../travel2.jpg"
const Learn = () => {

  return (
    <>
     <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Goggle </p>
        <div className='cards'>
            <div className='tripcard'>
                <TripDate 
                image={pic1}
                heading="Trip to pa"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore vero eius enim exercitationem amet culpa accusantium veniam beatae soluta quas voluptas, nobis deserunt, dolorum libero, ullam facilis nam voluptate?
                "/>
            </div>
            <div className='tripcard'>
                <TripDate 
                image={pic2}
                heading="Trip to pa"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore vero eius enim exercitationem amet culpa accusantium veniam beatae soluta quas voluptas, nobis deserunt, dolorum libero, ullam facilis nam voluptate?
                "/>
            </div>
            <div className='tripcard'>
                <TripDate 
                image={pic3}
                heading="Trip to pa"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore vero eius enim exercitationem amet culpa accusantium veniam beatae soluta quas voluptas, nobis deserunt, dolorum libero, ullam facilis nam voluptate?
                "/>
            </div>
        </div>
     </div>
    </>
  )
}

export default Learn
