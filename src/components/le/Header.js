import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderE } from '../../styles/Header';

export default function Header(){
    const location = useLocation();
    const path = location.pathname.replaceAll('/los-encapuchados/', '');
    console.log(location);
    return(
        <HeaderE>
            <div className="logo">
                <Link to="/los-encapuchados"><img src="/assets/img/logoe.png" alt="" /></Link>
            </div>
            <div className="menu-container">
                <ul>
                    <li><Link to="multimedia" className={path == 'multimedia' ? "active": ""}>Fotos / Videos</Link></li>
                    <li><Link to="whitelist" className={path == 'whitelist' ? "active": ""}>Normativas</Link></li>
                    <li><Link to="whitelist" className={path == 'about' ? "active": ""} >Los Encapuchados RP</Link></li>
                    <li><Link to="whitelist">Donaciones</Link></li>
                </ul>
            </div>
        </HeaderE>
    )
}