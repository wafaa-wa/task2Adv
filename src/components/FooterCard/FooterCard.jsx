import './FooterCard.css'

export default function FooterCard({ContactIcon, ContactText}) {
  return (
    <div className='FooterCard'>
        <button><img src={ContactIcon} /></button>
        <a href="#">{ContactText}</a>
    </div>
  )
}
