import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";


export default function NavBar({ Logo, links }) {
    const [activeLink, setActiveLink] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <div className='NavBar'>
            <div className="NavBar-Top">
                <img src="/assest/images/Nav/Abstract Design -Left1.png" className="Abstract-Design-Left1" />
                <img src="/assest/images/Nav/Abstract Design -left2.png" className="Abstract-Design-Left2" />
                <img src="/assest/images/Nav/Abstract Design -Left3.png" className="Abstract-Design-Left3" />
                <img src="/assest/images/Nav/Abstract Design 1.png" className="Abstract-Design-1" />
                <img src="/assest/images/Nav/Abstract Design 3.png" className="Abstract-Design-3" />
                <img src="/assest/images/Nav/Abstract Design 5.png" className="Abstract-Design-5" />

                <p>Admission is Open, Grab your seat now</p>
                <img src="/assest/images/Nav/Icon.png" className="Icon" />

                <img src="/assest/images/Nav/Abstract Design 2.png" className="Abstract-Design-2" />
                <img src="/assest/images/Nav/Abstract Design 4.png" className="Abstract-Design-4" />
                <img src="/assest/images/Nav/Abstract Design 6.png" className="Abstract-Design-6" />
                <img src="/assest/images/Nav/Abstract Design -Right1.png" className="Abstract-Design-Right1" />
                <img src="/assest/images/Nav/Abstract Design -Right2.png" className="Abstract-Design-Right2" />
                <img src="/assest/images/Nav/Abstract Design -Right3.png" className="Abstract-Design-Right3" />

            </div>
            <div className="NavBar-Bottom">
                <div className="Logo-Container">
                    <img src={Logo} className="Logo" />
                </div>

                <ul className={`Menu ${menuOpen ? "open" : "closed"}`}>
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link to={link.path} className="Nav-Link">
                                <button
                                    className={`Nav-Button ${activeLink === link.path ? "active" : ""}`}
                                    onClick={() => setActiveLink(link.path)} 
                                >
                                    {link.text}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="Menu-Toggle" onClick={toggleMenu}>
                    <img src="public/assest/images/Nav/Menu-Icon.png" />
                </button>



            </div>

        </div>
    )
}
