import React, { useState, useEffect, useContext } from 'react';
import { Link, Outlet } from "react-router-dom";
import { Button, CategoriesS, ConfirmModal } from '../../../styles/Categories';
import { TaskContext } from '../../context/TaskContext';
import Add from './Add';
import CatTable from './catTable';
import UpdateCategory from './UpdateCategory';
export default function Normativas(){
    const [showCat, setShowCat] = useState(false);
    const [idNor, setIdNor] = useState();
    const [newDatadb, setNewDatadb] = useState();
    //const {Confirm, setImgCont, imgCont,} = useContext(TaskContext);
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
    const [showCon, setShowCon] = useState();
    const [statusConfirm, setStatusConfirm] = useState(false);
    const chngStatus = (data) =>{
        setShowCon(data);
        setStatusConfirm(!data);
    }
    const confirmWindow = () =>{
        setStatusConfirm(true);
    }
    const closeWindow = () =>{
        setShowCon(false);
    }
    

    const Confirm = ({children})=>{
      
      return(
        <ConfirmModal>
          <div className="confirmCont">
              <div className="confirmTxt">
                  <h4>{children}</h4>
              </div>
              <div className="confirmBtns">
                <div className="confirmTrue">
                    <button onClick={confirmWindow}>Confirmar</button>
                </div>
                <div className="confirmFalse">
                    <button onClick={closeWindow}>Cancelar</button>
                </div>
              </div>
          </div>
        </ConfirmModal>
      )
    }
    return(
        <>
            { showCat && <Add closeModal={hideModalCat} newData={newData} />} 
            { showUCat && <UpdateCategory closeModal={hideModalUCat} idNor={idNor} newData={newData} />} 
            { showCon && <Confirm>Estas seguro que deseas borrar esta normativa?</Confirm>} 
            <CategoriesS>
            
                <div className="cat-container">
                    <h1>Normativas Los Encapuchados RP</h1>
                    <div className="cat-btn">
                        <Button onClick={showModal}>Agregar Normativa</Button>
                    </div>
                    <div className="cat-table">
                        <CatTable editBtn={showModalUCat} newData={newData} showCont={chngStatus}  confirm={statusConfirm} />
                    </div>
                </div>
                
                
            </CategoriesS>
        </>
        
    )
}