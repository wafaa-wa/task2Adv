import './NavigateCard.css'

export default function NavigateCard({ NavigateCardTitle, LineContainer, DescriptionNavigateCard, BtnCard, Arrow }) {
    return (
        <div className='NavigateCard'>
            <div className='NavigateCard-Top'>
                <div className='NavigateCard-Top1'>
                    <h2>{NavigateCardTitle}</h2>
                    <img src={LineContainer} />
                </div>
                <p>{DescriptionNavigateCard}</p>

            </div>
            <button>{BtnCard}<img src={Arrow} /></button>
        </div>
    )
}
