import { MVCardsData } from '../Data/MVCardsData'
import MissionAndVisionCard from '../MissionAndVisionCard/MissionAndVisionCard'
import StartSections from '../StartSections/StartSections'
import './MissionAndVisions.css'

export default function MissionAndVisions() {
    return (
        <div className='MissionAndVisions container'>
            <StartSections
                TopText="Mission & Visions"
                Title="Our Mission & Visions"
                Description="We are here to provide a nurturing and inclusive environment where young 
                minds can thrive, fostering a love for learning and personal growth."
            />
            <div className='MVCards'>
                {
                    MVCardsData.map((dataMV) => (
                        <MissionAndVisionCard
                            key={dataMV.id}
                            MVTitle={dataMV.MVTitle}
                            MVIcon={dataMV.MVIcon}
                            MVText={dataMV.MVText}

                        />
                    ))
                }
            </div>
        </div>
    )
}
