import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { Button, CategoriesS } from '../../styles/Categories';
import Add from './Add';
import CatTable from './catTable';
import UpdateCategory from './UpdateCategory';

export default function Normativas(){
    const [showCat, setShowCat] = useState(false);
    const [idNor, setIdNor] = useState();
    const [newDatadb, setNewDatadb] = useState();
    const showModal = () =>{
        setShowCat(true)
    }
    const hideModalCat = () =>{
        setShowCat(false);
    }
    const [showUCat, setShowUCat] = useState(false);
    const showModalUCat = (id) =>{
        setShowUCat(true);
        setIdNor(id);
    }
    const hideModalUCat = () =>{
        setShowUCat(false);
    }
    const newData = (data) =>{
    //    setNewDatadb(data);
    }

    return(
        <>
            { showCat && <Add closeModal={hideModalCat} newData={newData} />} 
            { showUCat && <UpdateCategory closeModal={hideModalUCat} idNor={idNor} newData={newData} />} 
            <CategoriesS>
            
                <div className="cat-container">
                    <h1>Normativas</h1>
                    <div className="cat-btn">
                        <Button onClick={showModal}>Agregar Normativa</Button>
                    </div>
                    <div className="cat-table">
                        <CatTable editBtn={showModalUCat} newData={newData}  />
                    </div>
                </div>
                
                
            </CategoriesS>
        </>
        
    )
}