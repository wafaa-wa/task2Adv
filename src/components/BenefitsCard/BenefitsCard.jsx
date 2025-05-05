import './BenefitsCard.css'

export default function BenefitsCard({X, IconCard, CardTitle, CardDescription }) {
  return (
    <div className={X ? 'BenefitsCard' : 'SliderAboutCard'}>
      <div className='IconContainer'><img src={IconCard} /></div>
      <h2 className='CardTitleB'>{CardTitle}</h2>
      <p className='CardDescriptionB'>{CardDescription}</p>
    </div>
  )
}
