import React from 'react';
import { Link } from "react-router-dom";
import './works.css';


function Works() {

  const users = [
    {
      name: `Platon`,
    },
    {
      name: `Solane`
    },
    {
      name: `Sedal`
    }
  ];

  return (

    <div className='works'>
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <h4>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</h4>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/works/${user.name}-study-case`} className='link'>{user.name} </Link>

        </h5>
      ))}

    </div>
  );
}

export default Works;