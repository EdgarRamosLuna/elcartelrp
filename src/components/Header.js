import React from 'react';
import { Header as StyledHeader } from '../styles/Header'
export default function Header(){
    return(
        <StyledHeader>
            <div className="logo">
                <img src="assets/img/logo.png" alt="" />
            </div>
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
    )
}