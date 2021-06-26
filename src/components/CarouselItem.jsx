import React from 'react';
import '../assets/styles/components/CarouselItem.scss' ;

function CarouselItem() {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src='https://www.fundacion-affinity.org/sites/default/files/el-gato-necesita-tener-acceso-al-exterior.jpg' alt='' />
      <div className='carousel-item__details'>
        <div className='icons'>
          <div className='icons__icon icons__icon--play' />
          <div className='icons__icon icons__icon--plus' />
        </div>
        <p className='title'>Título descriptivo</p>
        <p className='subtitle'>2019 16+ 114 minutos</p>
      </div>
    </div>
  );
}

export default CarouselItem;
