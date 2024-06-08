import React from 'react'
import Navbar from "../navbar/Navbar"
import Hero from '../hero/Hero'
import pic1 from "../travel1.jpg"
import Destination from '../destination/Destination'
import Trip from '../trip/Trip'
import Footer from '../footer/Footer'
import Learn from "../learn/Learn"
const Home = () => {
  return (
   <>
   <Navbar/>
   <Hero
   cName="hero"
   heroImg={pic1}
   title="Your Journey Your Story"
   text="Choose Your Favourite Destination."
   buttonText="Travel Plan"
   url="/"
   btnClass="show"
   />
   <Destination/>
   <Learn/>
   <Trip/>
   <Footer/>
   </>
  )
}

export default Home
