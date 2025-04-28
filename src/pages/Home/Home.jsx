import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Benefits from '../../components/Benefits/Benefits'
import Testimonials from '../../components/Testimonials/Testimonials'
import Navigate from '../../components/Navigate/Navigate'
import FAQ from '../../components/FAQ/FAQ'

export default function Home() {
  return (
    <div className='Home'>
      <Hero
        HeroImage="/assest/images/Hero/Hero-Image.jpg"
        Text1="Welcome to Little Learners Academy"
        Text2="Where Young Minds Blossom and  "
        SpanText="Dreams Take Flight."
        Text3="Our kinder garden school provides a nurturing and stimulating environment,
       fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting
        educational journey together!"


      />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Navigate />

    </div>
  )
}
