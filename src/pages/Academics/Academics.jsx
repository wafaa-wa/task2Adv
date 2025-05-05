import AcademicFather from '../../components/AcademicFather/AcademicFather'
import HeroSecond from '../../components/HeroSecond/HeroSecond'

export default function Academics() {
  return (
    <div className='Academics'>
      <HeroSecond
        HeroImage2="/assest/images/About Page/Hero/HeroImage2.png"
        TextContainer="Academics"
        Title="Nurturing Young Minds for Success"
        DescriptionHero2="Welcome to our Academics page, where we take pride in providing a comprehensive
                and stimulating educational experience for your child. Our kindergarten school's academic 
               program is thoughtfully designed to foster a love for learning while building a strong foundation 
               of essential skills and knowledge. From language arts and mathematics to science and social studies,
              our curriculum is carefully crafted to spark curiosity and encourage active exploration."

      />
      <AcademicFather />
    </div>
  )
}
