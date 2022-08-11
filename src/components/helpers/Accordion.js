import React, { useState, useEffect } from 'react';
import { AccordionD } from '../../styles/Normativas';

export default function AccordionHook (props){
    const {children, colorTxt, norName} = props;
    let datacolor = "red";
    const [status, setStatus] = useState(false);
    const showData = () =>{
        setStatus((prev) => !prev);
        console.log(status)
    }
    
    return(

        <AccordionD dataColor={colorTxt}>
                        <div className="nor-items">
                            <div className="nor-item">
                                <div className="nor-btn"  >
                                    
                                    <div className="nor-btn-txt" onClick={showData}>
                                        <i class={`fa-solid fa-chevron-right ${status ? "rotate" : "normal"}`}></i>
                                        <h4>{norName}</h4>
                                    </div>
                                </div>
                                <div className="nor-item-data" style={{display:status ? "flex" : "none"}}>
                                    <p>{children}</p>
                                </div>
                            </div>
                        </div>
        </AccordionD>
    )
}