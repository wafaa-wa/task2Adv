
import './Testimonials.css'
import { SliderCardsData } from '../Data/SliderCardsData';
import SliderCard from '../SliderCard/SliderCard';
import StartSections from '../StartSections/StartSections';
import Slider from '../Slider/Slider';

export default function Testimonials() {

   
    return (
        <div className='Testimonials container'>
            <StartSections
                TopText="Their Happy Words 🤗"
                Title="Our Testimonials"
                Description="Our testimonials are heartfelt reflections of the nurturing environment
                 we provide, where children flourish both academically and emotionally."

            />
             <Slider
                CardComponent={SliderCard}
                sliderData={SliderCardsData}
                buttonsPosition="side"
            />
           

        </div>
    )
}
