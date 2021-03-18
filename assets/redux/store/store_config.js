import { createStore } from 'redux'
import {authReducer} from "../reducers/auth"
import {userBasicReducer} from "../reducers/userBasic"
import { combineReducers } from 'redux'

let store = createStore(combineReducers({auth:authReducer,userBasic:userBasicReducer}))
export default store