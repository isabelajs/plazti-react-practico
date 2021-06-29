import data  from '../../initialState.json';
import {createStore} from 'redux';
import reducer from './../reducers'

const { initialState } = data
initialState.user = {}
initialState.playing = {}

const store = createStore(reducer,initialState)


export default store