import { useState } from 'react';
import './Testimonials.css'
import { SliderCardsData } from '../Data/SliderCardsData';
import SliderCard from '../SliderCard/SliderCard';
import StartSections from '../StartSections/StartSections';

export default function Testimonials() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const slides = [
        SliderCardsData.slice(0, 3),
        SliderCardsData.slice(3, 6)
    ];
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === SliderCardsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? SliderCardsData.length - 1 : prevIndex - 1
        );
    };
    return (
        <div className='Testimonials'>
            <StartSections
                TopText="Their Happy Words 🤗"
                Title="Our Testimonials"
                Description="Our testimonials are heartfelt reflections of the nurturing environment
                 we provide, where children flourish both academically and emotionally."

            />
            <div className='SliderContainer'>
                <button className="nav-button prev" onClick={prevSlide}><img src="/assest/images/Testimonials/Icon (11).png" /></button>
                <div className="slide">
                    {slides[currentIndex].map((card, index) => (
                        <SliderCard
                            key={index}
                            ProfileImage={card.ProfileImage}
                            ProfileName={card.ProfileName}
                            RateProfile={card.RateProfile}
                            Openion={card.Openion}
                        />
                    ))}
                </div>
                <button className="nav-button next" onClick={nextSlide}><img src="/assest/images/Testimonials/Icon (12).png" /></button>

            </div>
            <div className="slider-container1">
                <div className="slide">
                    <SliderCard
                        ProfileImage={SliderCardsData[currentCardIndex].ProfileImage}
                        ProfileName={SliderCardsData[currentCardIndex].ProfileName}
                        RateProfile={SliderCardsData[currentCardIndex].RateProfile}
                        Openion={SliderCardsData[currentCardIndex].Openion}
                    />
                </div>
                <div className='SliderButtons'>
                    <button className="nav-button prev" onClick={prevCard}><img src="/assest/images/Testimonials/Icon (11).png" /></button>
                    <button className="nav-button next" onClick={nextCard}><img src="/assest/images/Testimonials/Icon (12).png" /></button>

                </div>

            </div>

        </div>
    )
}
