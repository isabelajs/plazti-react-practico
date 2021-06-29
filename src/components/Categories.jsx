import React from 'react';
import '../assets/styles/components/Categories.scss' ;

//Traigo directamente mis hijos sin usar props
function Categories({ children }) {
  return (
    <div className='categories'>
      {children}
    </div>
  );
}

export default Categories;
