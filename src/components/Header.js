import React from 'react';
import { Header as StyledHeader } from '../styles/Header'
import { Link, Outlet } from 'react-router-dom'
import Menu from './Menu';
export default function Header(){
    return(
        <>
            <video autoPlay muted loop id="video">
            <source src="/assets/video/bg.mp4" type="video/mp4"/> 
            </video>
            <StyledHeader>
                <div className="social">
                    <div className="social-icons">
                        <a href="#"><i class="fa-brands fa-twitch"></i></a>
                    </div>
                    <div className="social-icons">
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className="social-icons">
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                    <div className="social-icons">
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </StyledHeader>
            <Menu />
            <Outlet />
        </>
        
    )
}