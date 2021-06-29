//la funcion por la cual se deben hacer todos los cambios
const reducer = (state,action) => {

  switch (action.type) {
    case 'SET_FAVORITE':

      if(!state.mylist.find(video=>video.id == action.payload.id)){
        return {
          ...state,
          mylist:[...state.mylist,action.payload]
        }
      }else{
        return{
          ...state
        }
      }

      break;
    
    case 'DELETE_FAVORITE':
      return{
        ...state,
        mylist: state.mylist.filter(video => video.id !== action.payload.id)
      }
    
    
    default:
      return state;
  }
};


export default reducer;

// obtengo el elemento
// evaluo si elemento esta dentro del elemento
//- si esta dentro de la lista => debo cortar generar una nueva lista sin el