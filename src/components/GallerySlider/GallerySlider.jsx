import { useEffect, useState } from 'react';
import './GallerySlider.css'

export default function GallerySlider({ images, TitleGallory, TextGallory }) {
    const [itemsPerSlide, setItemsPerSlide] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth < 1200) setItemsPerSlide(1);
            else if (window.innerWidth < 1430) setItemsPerSlide(2);
            else setItemsPerSlide(4);

            console.log("Updated itemsPerSlide:", itemsPerSlide);
        };

        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    const groupedImages = [];
    for (let i = 0; i < images.length; i += itemsPerSlide) {
        groupedImages.push(images.slice(i, i + itemsPerSlide));
    }

    const nextSlide = () => setCurrentIndex((prev) => (prev < groupedImages.length - 1 ? prev + 1 : 0));
    const prevSlide = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : groupedImages.length - 1));
    return (
        <div className='GallerySlider'>

            <div className='GallerySliderContainer'>
                <div className="slide1">
                    {groupedImages[currentIndex].map((img, idx) => (
                        <img key={idx} src={img} alt={`Slide ${currentIndex + 1}`} />
                    ))}
                </div>
                <div className='SlideRow2'>
                    <h2>{TitleGallory}</h2>
                    <div className='ButtonBottom'>
                        <button className="prev" onClick={prevSlide}><img src="/assest/images/Testimonials/Icon (11).png" /></button>
                        <button className="next" onClick={nextSlide}><img src="/assest/images/Testimonials/Icon (12).png" /></button>
                    </div>
                </div>
                <p>{TextGallory}</p>
            </div>

        </div>

    )
}
