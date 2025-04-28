import './BenefitsCard.css'

export default function BenefitsCard({IconCard, CardTitle, CardDescription }) {
  return (
    <div className='BenefitsCard'>
        <div className='IconContainer'><img src={IconCard} /></div>
        <h2>{CardTitle}</h2>
        <p>{CardDescription}</p>
    </div>
  )
}
