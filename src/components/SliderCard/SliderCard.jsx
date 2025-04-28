import './SliderCard.css'

export default function SliderCard({ ProfileImage, ProfileName, RateProfile, Openion }) {
    return (
        <div className='SliderCard'>
            <div className='Profile-Container'>
                <div className='Profile-Image-Container'>
                    <img src={ProfileImage} className='Profile-Image' />
                </div>
                <p>{ProfileName}</p>
            </div>
            <img src={RateProfile} className='RateProfile' />
            <p className='Openion'>{Openion}</p>
        </div>
    )
}
