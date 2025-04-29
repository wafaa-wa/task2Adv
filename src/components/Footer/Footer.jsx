import { FooterCardsData, FooterColumnData } from '../Data/FooterCardsData'
import FooterCard from '../FooterCard/FooterCard'
import FooterColumn from '../FooterColumn/FooterColumn'
import './Footer.css'

export default function Footer({ FooterLogo, UnderLogo, text1, text2, text3 }) {
    return (
        <div className='Footer'>
            <div className='Footer-Top'>
                <div className='Footer-Top-Left'>
                    <div className='Footer-Top-Left1'>
                        <img src={FooterLogo} className='FooterLogo' />
                        <p className='Under-Logo'>{UnderLogo}</p>
                    </div>
                    <div className='Footer-Top-Left2'>
                        {FooterCardsData.map((cont) => (
                            <FooterCard
                                ContactIcon={cont.ContactIcon}
                                ContactText={cont.ContactText}
                            />

                        ))}
                    </div>

                </div>
                <div className='Footer-Top-Right LaptopFootr'>
                    {FooterColumnData.map((column, index) => (
                        <FooterColumn
                            key={index}
                            ColumnTitle={column.ColumnTitle}
                            links={column.links}
                        />
                    ))}

                </div>
                <div className='Footer-Top-Right MobileFooter'>
                    <div className='Mobile-Column'>
                        {FooterColumnData.slice(0, 2).map((column, index) => (
                            <FooterColumn
                                key={index}
                                ColumnTitle={column.ColumnTitle}
                                links={column.links}
                            />
                        ))}
                    </div>
                    <div className='Mobile-Column'>
                        {FooterColumnData.slice(2, 4).map((column, index) => (
                            <FooterColumn
                                key={index}
                                ColumnTitle={column.ColumnTitle}
                                links={column.links}
                            />
                        ))}
                    </div>

                </div>

            </div>
            <div className='Footer-Bottom'>
                <div className='Footer-Line-Big'></div>
                <div className='Footer-Bottom1'>
                    <div className='Footer-Bottom1-Left'>
                        <p>{text1}</p>
                        <div className='Foter-Line'></div>
                        <p>{text2}</p>
                        <div className='Foter-Line'></div>
                        <p>{text3}</p>
                    </div>
                    <div className='Footer-Bottom1-Right'>
                        <button><img src="/assest/images/Footer/FaceBook.png" /></button>
                        <button><img src="/assest/images/Footer/Twitter.png" /></button>
                        <button><img src="/assest/images/Footer/LinkedIn.png" /></button>
                    </div>

                </div>
                <div className='Footer-Line-Big'></div>
                <p className='Footer-End'>Copyright © [2023] Little Learners Academy. All rights reserved.</p>


            </div>
        </div>
    )
}
