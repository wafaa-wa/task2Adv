import BenefitsCard from '../BenefitsCard/BenefitsCard'
import { SliderAboutCardsData } from '../Data/SliderAboutCardsData'
import Slider from '../Slider/Slider'
import StartSections from '../StartSections/StartSections'
import './Awards.css'

export default function Awards() {
    return (
        <div className='Awards container'>
            <StartSections
                TopText="Our Achievements"
                Title="Our Awards and Recognitions"
                Description="Little Learners Academy takes pride in our commitment to delivering high-quality education and 
                        outstanding student experiences. We are honored to have received various awards and recognitions for our dedication 
                        to early childhood education. These accolades reflect our team's relentless efforts in creating an
                         exceptional learning environment for our students."
            />
            <div className='AwardsSlider'>
                <Slider
                    CardComponent={BenefitsCard}
                    sliderData={SliderAboutCardsData}
                    buttonsPosition="bottom"
                    TextBottom="8 More Awards"
                />
            </div>
        </div>
    )
}
