import { FeaturesCardsData1, FeaturesCardsData2 } from '../../pages/Academics/FeaturesCardsData'
import StartSections from '../StartSections/StartSections'
import BenefitsCard from '../BenefitsCard/BenefitsCard'


export default function Features() {
    return (
        <div className='Features container'>
            <StartSections
                TopText="Our Features"
                Title="Our Special Features"
                Description="Our kinder garden school provides a nurturing and stimulating environment,
                        fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational
                         journey together!"

            />

            <div className='BenefitsCardContainer'>
                <div className='AllBenefitsCard'>
                    {FeaturesCardsData1.map((data) => (
                        <BenefitsCard
                            key={data.id}
                            IconCard={data.IconCard}
                            CardTitle={data.CardTitle}
                            CardDescription={data.CardDescription}
                            X={data.X}
                        />
                    ))}
                </div>
                <div className='AllBenefitsCard'>
                    {FeaturesCardsData2.map((data) => (
                        <BenefitsCard
                            key={data.id}
                            IconCard={data.IconCard}
                            CardTitle={data.CardTitle}
                            CardDescription={data.CardDescription}
                            X={data.X}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
