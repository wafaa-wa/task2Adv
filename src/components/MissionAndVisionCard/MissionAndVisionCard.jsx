import './MissionAndVisionCard.css'

export default function MissionAndVisionCard({ MVTitle, MVIcon, MVText }) {
    return (
        <div className='MissionAndVisionCard'>
            <div className='MVTop'>
                <h3>{MVTitle}</h3>
                <img src={MVIcon} />
            </div>
            <p className='MVText'>{MVText}</p>
        </div>
    )
}
