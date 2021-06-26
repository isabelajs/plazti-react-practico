/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../assets/styles/components/Categorie.scss' ;

export default function Categorie(props) {

  return (
    <div className='categorie'>

      <h2 className='categorie__title'>{props.title}</h2>

      {props.children}

    </div>
  );
};


