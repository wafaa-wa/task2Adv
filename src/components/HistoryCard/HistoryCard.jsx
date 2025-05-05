import './HistoryCard.css'

export default function HistoryCard({ Image, Year, TitleHistory, TextHistory }) {
    return (
        <div className='HistoryCard'>
            <div className='HistoryLeft'>
            <div className="horizontal-line">
                    <div className="small-circle out"></div>
                    <div className='small-line'>
                        <div className='InsideLine'></div>
                    </div>
                    <div className="small-circle"></div>
                </div>

            <div className="YearBox">
                
                <img src={Image}  className="YearImg" />
                <h3>{Year}</h3>
            </div>
            </div>


            <div className="TextHistory">
                <h4>{TitleHistory}</h4>
                <p>{TextHistory}</p>
            </div>
        </div>


    )
}
