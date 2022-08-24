import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderE } from '../../styles/Header';
import DiscordBtn from '../DiscordBtn';

export default function Header(){
    const location = useLocation();
    const path = location.pathname.replaceAll('/los-encapuchados/', '');
    console.log(location);
    const [menuOpen, setMenuOpen] = useState(false);
    const openMenu = () =>{
        setMenuOpen(!menuOpen);
        setTimeout(() => {
            document.getElementById("mm").classList.add("opacity-full");
        }, 300);
    }
    return(
        <HeaderE>
            <div className="logo">
                <Link to="/los-encapuchados"><img src="/assets/img/logoe.png" alt="" /></Link>
                <div className="btn-open">
                    <i class={`fa-solid ${menuOpen ? "fa-times":"fa-bars"}`} onClick={openMenu}></i>
                </div>
            </div>
            <div className="menu-container">
                <ul className="web-menu">
                    <li><Link to="whitelist" className={path == 'whitelist' ? "active": ""}>Normativas</Link></li>
                    <li><Link to="whitelist" className={path == 'about' ? "active": ""} >Los Encapuchados RP</Link></li>
                    <li><Link to="multimedia" className={path == 'multimedia' ? "active": ""}>Fotos / Videos</Link></li>
                    <li><Link to="whitelist">Donaciones</Link></li>
                </ul>
                {menuOpen ? <ul className="mobile-menu" id="mm">
                    <li><Link to="whitelist" className={path == 'whitelist' ? "active": ""}>Normativas</Link></li>
                    <li><Link to="whitelist" className={path == 'about' ? "active": ""} >Los Encapuchados RP</Link></li>
                    <li><Link to="multimedia" className={path == 'multimedia' ? "active": ""}>Fotos / Videos</Link></li>
                    <li><Link to="whitelist">Donaciones</Link></li>
                </ul>:""}
                
            </div>
            <DiscordBtn />
        </HeaderE>
    )
}