import HeroCard from '../HeroCard/HeroCard'
import './Hero.css'

export default function Hero({ HeroImage, Text1, Text2, SpanText, Text3 }) {
    return (
        <div className='Hero'>
            <img src={HeroImage} className='HeroImage' />
            <div className='HeroRightSid'>
                <div className='RightSide-Top'>
                    <div className='RightSide-Top1'>
                        <p>{Text1}</p>
                        <h1>{Text2} <span>{SpanText}</span></h1>
                    </div>
                    <p className='Text3'>{Text3}</p>
                </div>
                <div className='RightSide-Bottom'>
                    <HeroCard
                        CardNumber="+7000"
                        CardText="Students Passed Out"
                    />
                    <div className='Line'></div>
                    <HeroCard
                        CardNumber="+37"
                        CardText="Awards & Recognitions "
                    />
                    <div className='Line'></div>
                    <HeroCard
                        CardNumber="+15"
                        CardText="Experience Educators"
                    />

                </div>

            </div>

        </div>
    )
}
