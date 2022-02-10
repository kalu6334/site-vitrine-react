import React from 'react';
import {  Avatar } from 'react-lorem-ipsum';
import './home.css'

function Home() {
    return (
        <div className='home'>
            <h1>Confiez vos rêves à des experts du Web</h1>
            <Avatar/>
            <h4>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
            Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</h4>           
        </div>
    );
}

export default Home;