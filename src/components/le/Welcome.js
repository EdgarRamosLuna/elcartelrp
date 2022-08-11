import React, { useState, useEffect } from 'react';
import { WelcomeS } from '../../styles/Home';

export default function Welcome(){
    return(
        <WelcomeS>
            <div className="content">
                <h1>Bienvenido a Los Encapuchados RP</h1>
            </div>  
        </WelcomeS>
          
    )
}