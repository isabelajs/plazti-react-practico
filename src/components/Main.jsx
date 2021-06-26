
import React from 'react';
import '../assets/styles/components/Main.scss' ;

export default function Main({ children }) {
  return (
    <div className='main'>
      {children}
    </div>
  );
};
