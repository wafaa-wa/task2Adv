import { HistoryCardsData } from '../Data/HistoryCardsData'
import HistoryCard from '../HistoryCard/HistoryCard'
import StartSections from '../StartSections/StartSections'
import './History.css'

export default function History() {
    return (
        <div className='History container'>
            <StartSections
                TopText="Our Progressive Journey"
                Title="Our History"
                Description="Founded with a passion for early education in 2005, our kindergarten school boasts 
                        a rich history of empowering young learners to reach their potential through innovative 
                         methods and a supportive learning environment."

            />
            <div className='HistoryBottom'>
                <div className='HistoryCards'>
                    {
                        HistoryCardsData.map((datahis) => (
                            <HistoryCard
                                key={datahis.id}
                                Image={datahis.Image}
                                Year={datahis.Year}
                                TitleHistory={datahis.TitleHistory}
                                TextHistory={datahis.TextHistory}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
