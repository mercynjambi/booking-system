import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestinations from '../components/FeaturedDestinations';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
       <Hero /> 
       <FeaturedDestinations /> 
       <ExclusiveOffers />
       <Testimonials/>
    </>
  )
}

export default Home;