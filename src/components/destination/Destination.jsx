import React from 'react'
import "./destination.css"
import pic1 from "../travel1.jpg"
import pic2 from "../travel2.jpg"
import pic3 from "../travel3.jpg"
import pic4 from "../travel4.jpg"

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Poupular Destination</h1>
        <p>Tours Give you the oppertunity</p>
        <div className='first-des'>
            <div className='des-text'>
                <h2>Taal Volcano , Batangas</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea reprehenderit hic minus, enim eos quas earum, omnis molestias delectus inventore incidunt provident odit error. Minus eveniet vel qui nostrum deserunt!</p>
            </div>

            <div className='image'>
                <img alt="img" src={pic1}/>
                <img alt="img" src={pic2}/>
            </div>
        </div>
    </div>
  )
}

export default Destination
