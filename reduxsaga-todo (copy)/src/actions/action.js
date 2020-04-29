import * as taskConstant from '../constants/task'

export const fetchListTask = (params = {}) => {
    return {
        type: taskConstant.FETCH_TASK,
        payload: {
          params
        }
    }
}

export const fetchListTaskSuccess = (data) => {
    return {
        type: taskConstant.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListTaskFailed = (err) => {
    return {
        type: taskConstant.FETCH_TASK_FAILED,
        payload: {
            err
        }
    }
}

export const filterTask = keyword => ({
    type: taskConstant.FILTER_TASK,
    payload: {
        keyword
    }
})

export const filterTaskSuccess = dataFilter => ({
    type: taskConstant.FILTER_TASK_SUCCESS,
    payload: {
        dataFilter
    }
})

export const addTask = (title, des) => {
  return {
      type: taskConstant.ADD_TASK,
      payload: {
        title,
        des
      }
  }
}

export const addTaskSuccess = (taskData) => {
  return {
      type: taskConstant.ADD_TASK_SUCCESS,
      payload: {
          taskData
      }
  }
}

export const addTaskFailed = (err) => {
  return {
      type: taskConstant.ADD_TASK_FAILED,
      payload: {
          err
      }
  }
}

export const setTaskEditing = (task) => {
  return {
      type: taskConstant.SET_TASK_EDITING,
      payload: {
          task
      }
  }
}

export const updateTask = (title, des, status= 0) => {
  return {
      type: taskConstant.UPDATE_TASK,
      payload: {
        title,
        des,
        status
      }
  }
}

export const updateTaskSuccess = (data) => {
  return {
      type: taskConstant.UPDATE_TASK_SUCCESS,
      payload: {
          data
      }
  }
}

export const updateTaskFailed = (err) => {
  return {
      type: taskConstant.UPDATE_TASK_FAILED,
      payload: {
          err
      }
  }
}

export const deleteTask = (id) => {
  return {
      type: taskConstant.DELETE_TASK,
      payload: {
        id
      }
  }
}

export const deleteTaskSuccess = (id) => {
  return {
      type: taskConstant.DELETE_TASK_SUCCESS,
      payload: {
          id
      }
  }
}

export const deleteTaskFailed = (err) => {
  return {
      type: taskConstant.DELETE_TASK_FAILED,
      payload: {
          err
      }
  }
}



