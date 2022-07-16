import React from 'react'
import { Normativas } from '../styles/Normativas'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import CruzRoja from './normativas/CruzRoja';
import Mecanico from './normativas/Mecanico';
import Bandas from './normativas/Bandas';

export default function Whitelist(){
    return(
        <Normativas>
            <div className="main-content">
                <div className="title">
                    <h1>Normativas</h1>
                    <p>Si ya te has leído las normativas del servidor puedes Iniciar la evaluación para conseguir la Whitelist en nuestros servidores.</p>
                
                </div>
                <div className="content-nor">
                <Accordion allowZeroExpanded>
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
                </Accordion>
                
                </div>
            </div>
        </Normativas>
    )
}