import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { Menu as StyledMenu } from '../styles/Menu'
export default function Menu(){
    const location = useLocation();
    console.log(location);
    return(
        <StyledMenu>
            <div className="logo">
                <Link to="/"><img src="assets/img/logo.png" alt="" /></Link>
                <Link to="/los-encapuchados"><img src="assets/img/logoe.png" alt="" /></Link>
            </div>
            <div className="menu-w">
                <Link to="/whitelist">Whitelist / Normativas</Link>
                <Link to="/test">El Cartel RP</Link>
                <Link to="/">Fotos {'&'} Videos</Link>
                <Link to="/test">Donaciones</Link> 
            </div>
        </StyledMenu>
    )
}