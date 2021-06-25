import React from 'react';

function Carousel({ children }) {
  return (
    <section className='carousel'>
      <div className='carousel__container'>
        {children}
      </div>
    </section>
  );
}

export default Carousel;
