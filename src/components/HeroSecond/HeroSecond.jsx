import './HeroSecond.css'

export default function HeroSecond({ HeroImage2, TextContainer, Title, DescriptionHero2 }) {
    return (
        <div className='HeroSecond'>
            <img src={HeroImage2} />
            <div className='Hero2LeftSide'>
                <p>{TextContainer}</p>
                <h2>{Title}</h2>

            </div>
            <p className='Hero2RightSideText'>{DescriptionHero2}</p>

        </div>
    )
}
