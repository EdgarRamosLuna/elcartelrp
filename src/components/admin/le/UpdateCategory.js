import React, { useState, useEffect } from 'react';
import { Button, ModalCat } from '../../../styles/Categories';
import axios from 'axios';
export default function UpdateCategory(props){
    const {closeModal, idNor, newData} = props;
    const [titulo, setTitulo] = useState('');
    const [cont, setCont] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        axios.post('https://elcartelrp.herokuapp.com/api/normativasle/getnordata', {idnor: idNor}).then(res =>{
            const categoryData = res.data[0];
            setTitulo(categoryData.title);
            setCont(categoryData.content);
            setColor(categoryData.color);
        }).catch(err =>{
            console.log(err);
        });
      }, []);
    const handleModalContainerClick = (e) => e.stopPropagation();
    const hideModal = ()=>{
        if(typeof(closeModal) == 'function'){
            closeModal();
        }
    }
    const [btnStatus, setBtnStatus] = useState(false);
    const editarNor = () =>{
        setBtnStatus(true);
            let normativa = {
                idnor:idNor,
                title: titulo,
                content: cont,
                color:color,
            }
            axios.post('https://elcartelrp.herokuapp.com/api/normativasle/update', normativa)
            .then(res => {
                alert(res.data);
                hideModal();
                const newDatadb = {
                    "idnor":normativa.idnor,
                    "title":normativa.title,
                    "content":normativa.content,
                    "color":normativa.color,
                }
                newData(newDatadb);
                setBtnStatus(false);
            })
            .then(err => {console.log(err)}); 
    }
    return(
        <ModalCat onClick={hideModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <div className="btn-modal-close">
                    <button onClick={hideModal}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <h1>Editar Categoria</h1>
                <div className="cat-container">
                        <div className="cat-form">
                            <div className="cat-form-input">
                                <label htmlFor="titulo">Titulo de la Normativa</label>
                                <input type="text" id="titulo" value={titulo} onChange={(e)=> {setTitulo(e.target.value)}} />
                            </div>
                            <div className="cat-form-input">
                                <label htmlFor="desc">Contenido</label>
                                <textarea id="desc" value={cont} onChange={(e)=> {setCont(e.target.value)}}></textarea>
                            </div>
                            <div className="cat-form-input">
                                <label htmlFor="color">Color</label>
                                <center><input type="color" id="head" name="head" value={color} onChange={(e) => {setColor(e.target.value)}}></input></center>
                            </div>
                            <div className="cat-form-input">
                                <Button onClick={editarNor}>Guardar Categoria</Button>
                            </div>
                        </div>
                    </div>
            </div>
        </ModalCat>
        
    )
}