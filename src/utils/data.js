import data  from '../../initialState.json';
import {createStore} from 'redux';
import reducer from './../reducers'

const { initialState } = data
initialState.user = {}
initialState.playing = {}

const store = createStore(reducer,initialState)


export default store


// store.getState()
// store.dispatch()
// store.subscripcion()



// const actions = {
//   resta: 'RESTAR',
//   suma: 'SUMAR'
// }


// function actionSumar(valor){
//   return {
//     type:actions.suma,
//     valor: valor || 1
//   }
// }

// function actionResta(valor){
//   return {
//     type:actions.resta,
//     valor: valor || 1
//   }
// }




// function pepeReduce(estado,action){
//   if(action.type==actions.suma){
//     return estado + action.valor
//   }
//   else if (action.type == actions.resta){
//     return estado - action.valor
//   }

// }


// function cajaRegistradora(reducer,initialState){

//   this.reducer = reducer
//   this.plata = initialState

//   this.hacerCambio = (action)=>{
//     this.plata = this.reducer(this.plata,action)
//   }




// }

// const seon = new cajaRegistradora(pepeReduce,10)

// seon.hacerCambio(actionSumar(1))
// seon.hacerCambio(actionSumar(1))
// seon.hacerCambio(actionSumar(1))


// console.log(seon);


