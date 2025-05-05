import './StudentLearnCard.css'

export default function StudentLearnCard({ StudentImg, StudentTitle, StudentText }) {
    return (
        <div className='StudentLearnCard'>
            <div className='Shape'></div>
            <img src={StudentImg} />
            <div className='StudentCardBottom'>
                <h2>{StudentTitle}</h2>
                <p>{StudentText}</p>
            </div>

        </div>
    )
}
