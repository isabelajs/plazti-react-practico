//la funcion por la cual se deben hacer todos los cambios
const reducer = (state,action) => {

  console.log(action.payload);
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist:[...state.mylist,action.payload]
      }
    default:
      return state;
  }
};


export default reducer;


