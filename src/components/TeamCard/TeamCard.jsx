import './TeamCard.css'

export default function TeamCard({ ProfileTeamImg, ProfileName, ProfilreIcon, ProfileTitle, ProfileText }) {
    return (
        <div className='TeamCard'>
            <div className='TeamCardTop'>
                <div className='TeamCardTopLeft'>
                    <img src={ProfileTeamImg} className='ProfileTeamImg' />
                    <h3>{ProfileName}</h3>
                </div>
                <button className='ProfilreIcon'><img src={ProfilreIcon} /></button>
            </div>
            <div className='TeamCardBottom'>
                <h4>{ProfileTitle}</h4>
                <p>{ProfileText}</p>
            </div>
        </div>
    )
}
