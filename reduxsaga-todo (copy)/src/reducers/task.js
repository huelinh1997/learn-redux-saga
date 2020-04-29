import * as taskConstant from '../constants/task'
import { toastError, toastSuccess } from '../helpers/toastHelper';

const stateDefault = {
    listTask: [],
    taskEditing: null
}

 const reducer =(state=stateDefault, action) => {
    switch (action.type) {
        case taskConstant.FETCH_TASK:{
            return {
                ...state,
                listTask: []
            }
        }
        case taskConstant.FETCH_TASK_SUCCESS: {
            const {data} = action.payload;
            return {
                ...state,
                listTask: data
            }
          }
        case taskConstant.FETCH_TASK_FAILED: {
            const {err} = action.payload;
            toastError(err)
            return {
                ...state,
                listTask: []
            }
          }
        case taskConstant.FILTER_TASK_SUCCESS:{
            let {dataFilter} = action.payload
            return {
                ...state,
                listTask: dataFilter
            }
          }
        case taskConstant.ADD_TASK: {
          return {
            ...state,
          }
        }
        case taskConstant.ADD_TASK_SUCCESS: {
          const {taskData} = action.payload
          toastSuccess('Add new task success!')
          return {
            ...state,
            listTask: [
              taskData,
              ...state.listTask
            ]
          }
        }
        case taskConstant.ADD_TASK_FAILED: {
          const {err} = action.payload;
          toastError(err)
          return {
            ...state
          }
        }
        case taskConstant.SET_TASK_EDITING: {
          const {task} = action.payload
          return {
            ...state,
            taskEditing: task
          }
        }
        case taskConstant.UPDATE_TASK: {
          return {...state}
        }
        case taskConstant.UPDATE_TASK_SUCCESS: {
          const {data} = action.payload
          const {listTask} = state
          const index = listTask.findIndex(item => item.id === data.id)
          if(index !== -1) {
            const newList = [...listTask.slice(0, index), data, ...listTask.slice(index + 1)]
            toastSuccess('Update task success!')
            return {
              ...state,
              listTask: newList
            }
          } else return {...state}
        }
        case taskConstant.UPDATE_TASK_FAILED: {
          const {err} = action.payload;
          toastError(err)
          return {
            ...state
          }
        }
        case taskConstant.DELETE_TASK: {
          return {...state}
        }
        case taskConstant.DELETE_TASK_SUCCESS: {
          const {id} = action.payload
          toastSuccess('Delete task success!')
          return {
            ...state,
            listTask: state.listTask.filter(item => item.id !== id)
          }
        }
        case taskConstant.DELETE_TASK_FAILED: {
          const {err} = action.payload;
          toastError(err)
          return {
            ...state
          }
        }
        default: return state
    }
}

export default reducer
