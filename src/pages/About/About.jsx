import React from 'react'
import HeroSecond from '../../components/HeroSecond/HeroSecond'
import FatherComponent from '../../components/FatherComponent/FatherComponent'


export default function About() {
  return (
    <div >
      <HeroSecond
        HeroImage2="/assest/images/About Page/Hero/HeroImage2.png"
        TextContainer="Overview"
        Title="Welcome to Little Learners Academy"
        DescriptionHero2="A leading kinder garden school dedicated to providing a nurturing and 
      stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping
       curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual,
        social, emotional, and physical development, ensuring that each child reaches their full potential."

      />
      <FatherComponent />

    </div>
  )
}
