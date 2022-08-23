import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { DashboardS, MenuDash } from '../../../styles/Dashboard';
export default function MenuDashboard(){
    return(
        <MenuDash>
            <div className="dashboard-menu">
                <div className="logo">
                    <Link to ="/dashboard/main"><img src="/assets/img/logo.png" alt="" /></Link>
                </div>
                <div className="menu-container">
                    <ul>
                        <li className="dashboard"><Link to ="/dashboard/main">Dashboard</Link></li>
                        <li className="cat"><Link to ="/dashboard/normativas">Normativas</Link></li>
                        <li className="logout"><Link to ="/dashboard/lougout">Cerrar Sesion</Link></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </MenuDash>
    )
}