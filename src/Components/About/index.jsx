import React from 'react';
import { Avatar } from 'react-lorem-ipsum';
import './about.css'

function About() {
    return (
        <div className='about'>
            <h2>Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.</h2>
            <Avatar/>
            <h4>De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
             Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.</h4>
          
        </div>
    );
}

export default About;