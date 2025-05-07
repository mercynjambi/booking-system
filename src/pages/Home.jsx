import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestinations from '../components/FeaturedDestinations';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonials from '../components/Testimonials';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <>
       <Hero /> 
       <FeaturedDestinations /> 
       <ExclusiveOffers />
       <Testimonials/>
       <NewsLetter/>
    </>
  )
}

export default Home;