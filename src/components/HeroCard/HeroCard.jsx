import './HeroCard.css'

export default function HeroCard({CardNumber , CardText}) {
  return (
    <div className='HeroCard'>
        <p>{CardNumber}</p>
        <p>{CardText}</p>
    </div>
  )
}
