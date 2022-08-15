import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HomeE } from '../../styles/Home';
import Footer from './Footer';
import Header from './Header';
import Welcome from './Welcome';

export default function Home(){
    const location = useLocation();
    const path = location.pathname.replaceAll("/", "");
    const [loca, setLoca] = useState(null);
  //  setLoca(location.pathname);
    console.log(path);
    return(
        <HomeE>
          <div className="video-container">
            <video autoPlay muted loop id="video2">
                <source src="/assets/video/dayZ.mp4" type="video/mp4"/> 
            </video>
          </div>
          <Header />
            {path == "los-encapuchados" && <Welcome />}
            <Outlet />
        </HomeE>
    )
}