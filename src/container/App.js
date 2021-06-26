import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Main from '../components/Main';
import Categories from '../components/Categories';
import Categorie from '../components/Categorie';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

function App() {
  return (
    <div className='App'>
      <Header />

      <Main>
        <Search />

        <Categories>

          <Categorie title='Gaticos'>
            <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
            </Carousel>
          </Categorie>

          <Categorie title='Perritos'>
            <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
            </Carousel>
          </Categorie>

        </Categories>

      </Main>

      <Footer />
    </div>
  );
}

export default App;
