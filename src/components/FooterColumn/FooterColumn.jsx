import './FooterColumn.css'

export default function FooterColumn({ ColumnTitle, links }) {
    return (
        <div className='FooterColumn'>
            <h3>{ColumnTitle}</h3>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}

            </ul>
        </div>
    )
}
