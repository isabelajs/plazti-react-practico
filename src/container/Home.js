
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Main from '../components/Main';
import Categories from '../components/Categories';
import Categorie from '../components/Categorie';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/Home.scss';

function Home(props) {

  const { mylist, trends, originals} = props

  
  return (
    <div className='Home'>

      <Main>
        <Search />

        <Categories>

    
        {/* //si dentro del componente lista existen elementos */}
        { mylist.length > 0 &&
          <Categorie title='popo'>
            <Carousel>
              {
                mylist.map(video =>
                <CarouselItem key={video.id} {...video}/>
                )
              }
            </Carousel>
            </Categorie>
          }

        { trends.length > 0 &&
          <Categorie title='Tendencias'>
            <Carousel>
              {
                trends.map(video =>
                  <CarouselItem key={video.id} {...video}/>
                )
              }
            </Carousel>
          </Categorie>
        }

        { originals.length > 0 &&
          <Categorie title='Originales'>
            <Carousel>
              {
                originals.map(video =>
                  <CarouselItem key={video.id} {...video}/>
                )
              }
            </Carousel>
          </Categorie>
        }

        </Categories>

      </Main>

    </div>
  );
}

//traigo solo los elementos que realmente necesito
const mapStateToProps = (state) =>{
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals
  };
};

//conect recibe dos cosas props y acciones
// me permite traer props que necesito y estan suscritos, para enlazarlos con los props ya existentes de mi home, es decir los agrega
export default connect(mapStateToProps,null)(Home)

