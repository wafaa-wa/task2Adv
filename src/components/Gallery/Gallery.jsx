import { useState } from 'react'
import { FulterButtonData } from '../Data/FulterButtonData'
import { GallorySlidersData } from '../Data/GallorySlidersData'
import FulterButton from '../FulterButton/FulterButton'
import GallerySlider from '../GallerySlider/GallerySlider'
import StartSections from '../StartSections/StartSections'
import './Gallery.css'

export default function Gallery() {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const filteredGallery = selectedFilter === "All"
    ? GallorySlidersData
    : GallorySlidersData.filter(slid => slid.TitleGallory === selectedFilter);
    return (
        <div className='Gallery container'>
            <StartSections
                TopText="Our Gallery"
                Title="Our Rooms Gallery"
                Description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and 
                                 unforgettable experiences at our kindergarten school.!"

            />
            <div className='GalleryContainer'>
                <div className='FulterBtnContainer'>
                    {["All", ...new Set(GallorySlidersData.map(slid => slid.TitleGallory))].map((title) => (
                        <FulterButton
                            key={title}
                            className={selectedFilter === title ? "active" : ""}
                            onClick={() => setSelectedFilter(title)}
                        >
                            {title}
                        </FulterButton>
                    ))}

                </div>
                {
                    filteredGallery.map((slid) => (
                        <GallerySlider
                            key={slid.id}
                            images={slid.images}
                            TitleGallory={slid.TitleGallory}
                            TextGallory={slid.TextGallory}

                        />
                    ))
                }

            </div>
        </div>
    )
}
