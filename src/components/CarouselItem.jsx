import React, { useRef, forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss' ;

const CarouselItem = forwardRef((props,ref)=>{
  
  const {click, cover, title, year, contentRating, duration} = props
  
  //cada que se ejecuta de nuevo esta funcion el componente se renderiza y por ende ref activa la funcion para volver a guardar la instancia generada
  return (
    <div ref={ref} className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div onClick={click ? click: ()=>{}} className='carousel-item__details'>
        <div className='icons'>
          <div className='icons__icon icons__icon--play' />
          <div className='icons__icon icons__icon--plus' />
        </div>
        <p className='title'>{title}</p>
        <p className='subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  )
})


// se define como se reciben los datos del componente, me notifica si no se cumple la condición
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  year: PropTypes.number,
}


export default CarouselItem