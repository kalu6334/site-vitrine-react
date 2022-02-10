import React, { useEffect, useState } from 'react';
import {  useParams } from "react-router-dom";
import Data from '../Data';
import {  Avatar } from 'react-lorem-ipsum';
import './study.css'


function StudyCase(){
    const {name} = useParams();
    const [currentPhilo, setCurrentPhilo] = useState(undefined)

    useEffect(() => {
        const foundPhilo = Data.find((title) => title.name === name);
        setCurrentPhilo(foundPhilo);
      }, [name])
    if (!currentPhilo){
      return null
    }
     
        return (
            <div className='study'>
             <Avatar/>
             <h2 >{name}</h2>
             <h3>{currentPhilo.title}</h3>
             <h4> {currentPhilo.content}</h4>

            </div>
        )
            
};

export default StudyCase;