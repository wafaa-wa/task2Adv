import { NavigateCardsData } from '../Data/NavigateCardsData'
import NavigateCard from '../NavigateCard/NavigateCard'
import StartSections from '../StartSections/StartSections'
import './Navigate.css'

export default function Navigate() {
    return (
        <div className='Navigate'>
            <StartSections
                TopText="Explore More"
                Title="Navigate through our Pages"
                Description="Your gateway to discovering a wealth of valuable information about our kindergarten school,
                       Feel free to explore and learn more about the enriching experiences that await your child 
                       at our kindergarten school"
            />
            <div className='AllNavigateCards'>
                <div className='RowNavigateCard'>
                    {NavigateCardsData.slice(0, 2).map((data) => (
                        <NavigateCard
                            key={data.id}
                            NavigateCardTitle={data.NavigateCardTitle}
                            LineContainer={data.LineContainer}
                            DescriptionNavigateCard={data.DescriptionNavigateCard}
                            BtnCard={data.BtnCard}
                            Arrow={data.Arrow}
                        />
                    ))}

                </div>
                <div className='RowNavigateCard'>
                    {NavigateCardsData.slice(2, 4).map((data) => (
                        <NavigateCard
                            key={data.id}
                            NavigateCardTitle={data.NavigateCardTitle}
                            LineContainer={data.LineContainer}
                            DescriptionNavigateCard={data.DescriptionNavigateCard}
                            BtnCard={data.BtnCard}
                            Arrow={data.Arrow}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}
