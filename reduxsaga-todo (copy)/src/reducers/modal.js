import * as type from '../constants/modal'

const initialState = {
    showModal: false,
    title: '',
    component: null
}

const reducer = (state=initialState, action)=> {
    switch(action.type) {
        case type.SHOW_MODAL:
            return {
                ...state,
                showModal: true
            }
        case type.HIDE_MODAL:
            return {
                ...state,
                showModal: false,
                title: '',
                component: null
            }
        case type.CHANGE_MODAL_TITLE:
            return {
                ...state,
                title: action.payload.title
            }
        case type.CHANGE_MODAL_CONTENT:
            console.log('component',action.payload.component)
            return {
                ...state,
                component: action.payload.component
            }
        default: return state
    }
}

export default reducer
