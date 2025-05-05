import { useEffect, useState } from 'react';
import './Slider.css'

export default function Slider({ CardComponent, sliderData, buttonsPosition, TextBottom }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(3);

    useEffect(() => {
        const updateCardsPerSlide = () => {
            if (window.innerWidth <= 992) {
                setCardsPerSlide(1);
            } else if (window.innerWidth <= 1750) {
                setCardsPerSlide(2);
            } else {
                setCardsPerSlide(3);
            }
        };

        updateCardsPerSlide();
        window.addEventListener('resize', updateCardsPerSlide);

        return () => window.removeEventListener('resize', updateCardsPerSlide);
    }, []);
    const slides = [];
    for (let i = 0; i < sliderData.length; i += cardsPerSlide) {
        slides.push(sliderData.slice(i, i + cardsPerSlide));
    }
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };
    return (
        <div className={`SliderContainer ${buttonsPosition}`}>
            {buttonsPosition === "side" && (
                <button className="prev BigMedia" onClick={prevSlide}><img src="/assest/images/Testimonials/Icon (11).png" /></button>
            )}
            <div className="slide">
                {slides[currentIndex].map((cardData, index) => (
                    <CardComponent key={index} {...cardData} />
                ))}
            </div>
            {
                buttonsPosition === "side" && (
                    <button className="next BigMedia" onClick={nextSlide}><img src="/assest/images/Testimonials/Icon (12).png" /></button>
                )
            }
            {
                buttonsPosition === "side" && (
                    <div className=' SmallMedia'>
                        <button className="prev" onClick={prevSlide}><img src="/assest/images/Testimonials/Icon (11).png" /></button>
                        <button className="next" onClick={nextSlide}><img src="/assest/images/Testimonials/Icon (12).png" /></button>
                    </div>

                )
            }

            {
                buttonsPosition === "bottom" && (
                    <div className="SliderButtons">
                        <p>{TextBottom}</p>
                        <div className='ButtonBottom'>
                            <button className="prev" onClick={prevSlide}><img src="/assest/images/Testimonials/Icon (11).png" /></button>
                            <button className="next" onClick={nextSlide}><img src="/assest/images/Testimonials/Icon (12).png" /></button>
                        </div>
                    </div>
                )
            }
        </div >
    )
}
