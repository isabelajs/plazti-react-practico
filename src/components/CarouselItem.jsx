import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss' ;

function CarouselItem({cover, title, year, contentRating, duration}) {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
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
  );
}


// se define como se reciben los datos del componente, me notifica si no se cumple la condición
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  year: PropTypes.number,


}
export default CarouselItem;
