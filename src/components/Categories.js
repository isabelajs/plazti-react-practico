import React from 'react';

//Traigo directamente mis hijos sin usar props
function Categories({ children }) {
  return (
    <div className='categories'>
      <h3 className='categories__title'>Mi lista</h3>
      {children}
    </div>
  );
}

export default Categories;
