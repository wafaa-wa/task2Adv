import { useState } from 'react';
import StartSections from '../StartSections/StartSections'
import './FAQ.css'
import { FAQItemData } from '../Data/FAQItemData';
import FAQItemOpen from '../FAQItemOpen/FAQItemOpen';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='FAQ'>
            <StartSections
                TopText="Solutions For The Doubts"
                Title="Frequently Asked Questions"
                Description="Find all the essential information you need in our FAQ section, 
                       designed to address the most frequently asked questions and help you make informed decisions 
                       for your child's education."

            />
            <div className='Accordion'>
                <div className='Accordion-Side'>
                    {FAQItemData.slice(0, 4).map((faq, index) => (
                        <FAQItemOpen
                            key={index}
                            FAQTitle={faq.FAQTitle}
                            FAQAnswer={faq.FAQAnswer}
                            FAQIconOpen={faq.FAQIconOpen}
                            FAQIconClosed={faq.FAQIconClosed}
                            isOpen={openIndex === index}
                            toggleOpen={() => toggleOpen(index)}
                        />
                    ))}
                </div>
                <div className='Accordion-Side'>
                    {FAQItemData.slice(4).map((faq, index) => (
                        <FAQItemOpen
                            key={index + 4}
                            FAQTitle={faq.FAQTitle}
                            FAQAnswer={faq.FAQAnswer}
                            FAQIconOpen={faq.FAQIconOpen}
                            FAQIconClosed={faq.FAQIconClosed}
                            isOpen={openIndex === index + 4}
                            toggleOpen={() => toggleOpen(index + 4)}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}
