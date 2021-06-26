
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Main from '../components/Main';
import Categories from '../components/Categories';
import Categorie from '../components/Categorie';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import data from '../../initialState.json'
import { initial } from 'lodash';

function App() {
  const {initalState} = data


  return (
    <div className='App'>
      <Header />

      <Main>
        <Search />

        <Categories>


      {/* //si dentro del componente lista existen elementos */}
        {
          initalState.mylist.length > 0 &&
          <Categorie title= 'mi lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categorie>
        }

        
          <Categorie title='Tendencias'>
            <Carousel>
            { initalState.trends.length > 0 &&
              initalState.trends.map(video =>
                <CarouselItem key={video.id} {...video}/>
                )
            }
            </Carousel>
          </Categorie>

          <Categorie title='Originales'>
            <Carousel>
            { initalState.originals.length > 0 &&
              initalState.originals.map(video =>
                <CarouselItem key={video.id} {...video}/>
                )
            }
            </Carousel>
          </Categorie>

        </Categories>

      </Main>

      <Footer />
    </div>
  );
}

export default App;
