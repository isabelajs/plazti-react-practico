import React from 'react';
import '../assets/styles/components/Search.scss';

function Search() {
  return (
    <section className='main__search'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input className='main__input' type='text' placeholder='Buscar...' />
    </section>
  );
}

export default Search;

