import React, { useEffect, useRef } from 'react';
import '../assets/styles/components/Carousel.scss' ;

function Carousel({ children }) {
  const container = useRef(null) ;

  const handleMoveRight = () => {
    container.current.scrollLeft -= 200 ;
  } ;
  const handleMoveLeft = () => {
    container.current.scrollLeft += 200;
  } ;

  return (
    <div>
      <div ref={container} className='carousel'>
        <div className='carousel__container'>
          {children}
        </div>
      </div>
      <div className='categorie__buttons'>
        <div role='button' className='categorie__button categorie__button-left' onClick={handleMoveRight} />
        <div role='button' className='categorie__button categorie__button-right' onClick={handleMoveLeft} />
      </div>
    </div>
  );
}

export default Carousel;
