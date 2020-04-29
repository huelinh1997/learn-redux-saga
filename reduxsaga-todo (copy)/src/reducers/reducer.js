import {combineReducers} from 'redux'
import taskReducers from './task'
import uiReducers from './ui'
import modalReducers from './modal'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    task: taskReducers,
    ui: uiReducers,
    modal: modalReducers,
    form: formReducer // phai dang ky ten la form
})

export default rootReducer
