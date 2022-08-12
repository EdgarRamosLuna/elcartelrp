import React, { useState, useEffect } from 'react';

import { AccordionD, NormativasLE } from '../../styles/Normativas'
import AccordionHook from '../helpers/Accordion';
import axios from 'axios';
import ScrollTop from '../helpers/ScrollTop';
export default function WhitelistLE(){
    const [datadb, setDataDb] = useState([]);
    useEffect(() => {
        axios.get('https://elcartelrp.herokuapp.com/api/normativas/getdata').then(res =>{
          //  console.log(res.data);
            setDataDb(res.data);
            }).catch(err =>{
                console.log(err);
            });
    }, []);
    const listacat = datadb.map(normativa =>{
        return(
                <div key={normativa.idnor} className="item-container">
                        <AccordionHook colorTxt={normativa.color} norName={normativa.title} cursorC={0}>
                            {normativa.content}
                        </AccordionHook>
                </div>
            )
    });
    return(
            <NormativasLE>
                <div className="main-content">
                <div className="title">
                    <h1>Normativas</h1>
                    <i class="fa-solid fa-biohazard"></i>
                    <h5>Si ya te has leido las normativas del servidor puedes Iniciar la evaluacion para conseguir la Whitelist en nuestros servidores</h5>
                    
                </div>
                <div className="content-nor" id="normativas">
                {listacat}
              

               {/* <Accordion allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="nor-btn-txt txt-y">
                                        <h4>normativa mecanico </h4>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                    <Mecanico/>
                            </AccordionItemPanel>
                        </AccordionItem>
                </Accordion>
                <Accordion allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="nor-btn-txt txt-b">
                                        <h4>normativa cruz roja </h4>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                    <CruzRoja/>
                            </AccordionItemPanel>
                        </AccordionItem>
                </Accordion>
                <Accordion allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton >
                                    <div className="nor-btn-txt txt-r">
                                        <h4>normativa bandas </h4>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                    <Bandas/>
                            </AccordionItemPanel>
                        </AccordionItem>
                </Accordion>*/}
                <ScrollTop idView={"normativas"}  scrollI={0}/>
                </div>
            </div>
        </NormativasLE>
    )
}