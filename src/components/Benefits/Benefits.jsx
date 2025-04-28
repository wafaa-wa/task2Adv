import BenefitsCard from '../BenefitsCard/BenefitsCard'
import { BenefitsCardsData1, BenefitsCardsData2 } from '../Data/BenefitsCardsData'
import StartSections from '../StartSections/StartSections'
import './Benefits.css'

export default function Benefits() {
    return (
        <div className='Benefits'>
            <StartSections
                TopText="Children Deserve Bright Future"
                Title="Our Benefits"
                Description="With a dedicated team of experienced educators, state-of-the-art facilities,
                          and a comprehensive curriculum, we aim to lay a strong foundation for your 
                          child's future."

            />

            <div className='BenefitsCardContainer'>
                <div className='AllBenefitsCard'>
                    {BenefitsCardsData1.map((data) => (
                        <BenefitsCard
                            key={data.id}
                            IconCard={data.IconCard}
                            CardTitle={data.CardTitle}
                            CardDescription={data.CardDescription}
                        />
                    ))}
                </div>
                <div className='AllBenefitsCard'>
                    {BenefitsCardsData2.map((data) => (
                        <BenefitsCard
                            key={data.id}
                            IconCard={data.IconCard}
                            CardTitle={data.CardTitle}
                            CardDescription={data.CardDescription}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
