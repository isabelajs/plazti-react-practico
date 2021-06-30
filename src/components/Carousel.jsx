import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Carousel.scss' ;


// TODO: Te amo mi vida me tomo 5 horas entender esa mierda, me acoste a las 5 am, lo siento por trasnochar
// TODO: porfavor revisar los dos links que te envie en whatss  y leer los siguientes links
// https://reactjs.org/docs/hooks-reference.html#useref  
// https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables

{
  //1 Parte:
    //en estos dos explican que putas es useRef dice que crea un objeto asi  {current:valores}
    //pero que la diferencia entre useRef y un objeto plano, es que useRef persiste en el tiempo asi como useState
    //osea aunque se haga un nuevo render el objeto es el mismo, pero con las mutaciones que requieran
    
    //2 Parte:
    //https://dev.to/carlosrafael22/using-refs-in-react-functional-components-part-1-useref-callback-ref-2j5i
    //en este articulo te das cuenta que no es necesario usar useRef , sencillamente utilizan una variable normal

    //Notas para leer el articulo
    //como utiliza typeScript entonces si lees let inputRef: HTMLInputElement es sencillamente para decir que en 
    //en esa variable solo puede guardarse un HTMLinputElement o el vscode te avisara que tienes un error y no compilara

    //la parte de callback-Ref del articulo es lo que utilice en este caso, pasas una funcion y cuando la referencia
    //va a ser asignada a (el useRef / Objeto plano / variable) como lo que encuentra es una funcion entonces ejecuta tu funcion
    //pasando como parametro el HTMLelement 



      // Aplicacion a nuestro caso

      // ahora imagina que nuestra variable para almacenar las referencias de instancias es una lista

      // listaReferencias = []

      // si yo hago listaReferencias[i]='x' es como hacer un push en la posicion i de la lista

      // como vamos a tener n elementos 'carousel-item' cada uno es iterable tal que podemos acceder a (objeto,index) en el map

      // la prop ref: le asignamos una funcion callback que asignara (variableAlmacenadora = instanciaHTML)


      // const childrenRef = useRef([]);

      // {React.Children.map(children, (child, index) =>
      //   React.cloneElement(child, {
      //     ref: elementoInstancia => {
      //       childrenRef.current[index] = elementoInstancia}
      //   })
      // )}


      //  ya explicamos arriba que useRef es lo mismo que un objeto plano con una propiedad llamada current (objeto = {current:[]})

      //por eso hacemos childrenRef.current = [] y por lo tanto childrenref.current[index] es igual que [mi_lista][index]

      //asi que asignamos para cada numerando (index) en la lista cada objeto elementoInstancia que es devuelto por el callback 


      // Entendimiento del callback 

      // let referencia-directa-div = null

      // miFuncion = (elemento) => { referencia-directa-div = elemento } 

      // <div ref={miFuncion} />

      // entonces cuando div sea renderizado ejecutara miFuncion y la prop ref es cmo un evento onClick asi que ejecutara la funcion, y a diferencia de onClick que recibimos un (event)
      // aca recibiremos un HTMLElement generado por react con react.createElement (elemento= NodoCreado/instanciaHtml )

      // asi que tenemos que elemento = instancia del div

      // entonces miFuncion solo es encargada de asignar en la variable (referencia-directa-div) el valor de elemento

      // ya que ejecuta { referencia-directa-div = elemento}

  //si no enteindes vuelve a leer hasta que te sangren los ojitos jajajajjaja TE AMO

}
    
function Carousel({ children, mylist }) {
  const container = useRef(null) ;
  const childrenRef = useRef([]);

  useEffect(() => {

    const lastItemCarousel = childrenRef.current[childrenRef.current.length-1]
    const itemsWithoutLastItem = childrenRef.current.slice(0,-1)


    if(childrenRef.current.length == 1){
      lastItemCarousel.style.transformOrigin = 'center left'
    }
    
    if(childrenRef.current.length>1){

      const beforeLastItemCarousel = itemsWithoutLastItem[itemsWithoutLastItem.length-1]

      beforeLastItemCarousel.onmouseout = null
      beforeLastItemCarousel.onmouseover = null

      lastItemCarousel.onmouseover = ()=>{itemsWithoutLastItem.forEach(item => {
        item.style.transform = 'translateX(-60px)'
      });}
  
      lastItemCarousel.onmouseout = ()=>{itemsWithoutLastItem.forEach(item => {
        item.style.transform = ""
      });}

    }


  }, [mylist]);


  const handleMoveRight = () => {
    container.current.scrollLeft -= 200 ;
  } ;
  const handleMoveLeft = () => {
    container.current.scrollLeft += 200;
  } ;

  return (
    <>
      <div ref={container} className='carousel'>
        <div className='carousel__container'>
          {React.Children.map(children, (child, index) =>{

            return React.cloneElement(child, {
              ref: elementHtml => childrenRef.current[index] = elementHtml
            })
          }          
          )}
        </div>
      </div>
      <div className='categorie__buttons'>
        <div role='button' className='categorie__button categorie__button-left' onClick={handleMoveRight} />
        <div role='button' className='categorie__button categorie__button-right' onClick={handleMoveLeft} />
      </div>
    </>
  );
}

const mapStateToProps = (state)=>{
  return{
    mylist: state.mylist
  }
}

export default connect(mapStateToProps,null)(Carousel)