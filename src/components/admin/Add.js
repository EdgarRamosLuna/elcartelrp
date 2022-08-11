import React, { useState } from 'react';
import { Button, ModalCat } from '../../styles/Categories';
import axios from 'axios';
import uniqid from 'uniqid';
export default function Add(props){
    const {closeModal, newData} = props;
    const [titulo, setTitulo] = useState('');
    const [cont, setCont] = useState('');
    const [color, setColor] = useState('');
    const handleModalContainerClick = (e) => e.stopPropagation();
    const hideModal = ()=>{
        if(typeof(closeModal) == 'function'){
            closeModal();
        }
    }

    const guardarCategoria = () =>{
        let normativa = {
            idnor: uniqid(),
            title: titulo,
            content: cont,
            color:color,
        }
        axios.post('/api/normativas/add', normativa)
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
        })
        .then(err => {console.log(err)});
        
            
        }
        return(
            <ModalCat onClick={hideModal}>
                <div className="modal-container" onClick={handleModalContainerClick}>
                    <div className="btn-modal-close">
                        <button onClick={hideModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <h1>Agregar Nueva Normativa</h1>
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
                                <label htmlFor="titulo">Color</label>
                                
                                <select value={color} onChange={(e) => {setColor(e.target.value)}}>
                                    <option value="0" selected>Selecciona un color</option>
                                    <option value="#f7ff00">Amarillo</option>
                                    <option value="#f2120c">Rojo</option>
                                    <option value="#1054f5">Azul</option>
                                    <option value="#00c3ff">Azul2</option>
                                    <option value="#68ff00">Verde</option>
                                </select>
                            </div>
                            <div className="cat-form-input">
                                <Button onClick={guardarCategoria}>Guardar Categoria</Button>
                            </div>
                        </div>
                    </div>
            </div>
        </ModalCat>
        
    )
}