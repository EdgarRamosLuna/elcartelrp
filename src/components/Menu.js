import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { Menu as StyledMenu } from '../styles/Menu'
export default function Menu(){
    return(
        <StyledMenu>
            <Link to="/"><img src="/assets/images/settings.svg" alt="" />Fotos {'&'} Videos</Link>
            <Link to="/whitelist"><img src="/assets/images/settings.svg" alt="" />Whitelist / Normativas</Link>
            <Link to="/test"><img src="/assets/images/settings.svg" alt="" />El Cartel RP</Link>
            <Link to="/test"><img src="/assets/images/settings.svg" alt="" />Donaciones</Link>
        </StyledMenu>
    )
}