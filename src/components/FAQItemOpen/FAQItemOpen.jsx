import './FAQItemOpen.css'

export default function FAQItemOpen({ FAQTitle, FAQAnswer, isOpen, toggleOpen, FAQIconOpen, FAQIconClosed }) {
    return (
        <div className={`FAQItemOpen ${isOpen ? 'open' : 'closed'}`}>
            <div className="FAQLeftSide">
                <div className='TitleContainerFAQ'>
                    <h2 className="FAQTitle">{FAQTitle}</h2>
                    <button className="FAQIcon In-Small-Screen" onClick={toggleOpen}>
                        <img src={isOpen ? FAQIconOpen : FAQIconClosed} alt="Toggle Icon" />
                    </button>

                </div>
                {isOpen && (
                    <>
                        <div className="FAQLine"></div>
                        <p className="FAQAnswer">{FAQAnswer}</p>
                    </>
                )}
            </div>
            <button className="FAQIcon In-Big-Screen" onClick={toggleOpen}>
                <img src={isOpen ? FAQIconOpen : FAQIconClosed} alt="Toggle Icon" />
            </button>
        </div>
    )
}
