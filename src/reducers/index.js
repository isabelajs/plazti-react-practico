//la funcion por la cual se deben hacer todos los cambios
const reducer = (state,action) => {

  switch (action.type) {
    case 'SET_FAVORITE':

      if(!state.mylist.find(video=>video.id == action.payload.id)){
        return {
          ...state,
          mylist:[...state.mylist,action.payload]
        }
      }
      
      
    default:
      return state;
  }
};


export default reducer;
