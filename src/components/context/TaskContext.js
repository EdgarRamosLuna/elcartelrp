import axios from 'axios';
import React, {createContext, useState, useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const TaskContext = createContext();
export function TaskContextProvider(props){
  const {children} = props;
  
  return (
    <TaskContext.Provider value=
        {
            {
                
            }
        }>
        {children}
    </TaskContext.Provider>
  )
}
