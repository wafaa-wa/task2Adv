import './StartSections.css'

export default function StartSections({TopText , Title , Description }) {
  return (
    <div className='StartSections'>
        <p className='TopContainer'>{TopText}</p>
        <h2>{Title}</h2>
        <p>{Description}</p>

    </div>
  )
}
