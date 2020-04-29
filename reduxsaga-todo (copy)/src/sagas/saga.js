import {fork, take,call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects'
import * as taskTypes from '../constants/task'
import {getList, addTask, updateTask, deleteTask} from '../apis/apiTask'
import {STATUS_CODE} from '../constants/index'
import {
        fetchListTaskSuccess,
        fetchListTaskFailed ,
        addTaskSuccess,
        addTaskFailed,
        fetchListTask,
        updateTaskSuccess,
        updateTaskFailed,
        deleteTaskSuccess,
        deleteTaskFailed} from '../actions/action'
import { showLoading, hideLoading } from '../actions/ui';
import {hideModal} from '../actions/modal'

function* watchFetchListTaskAction() {
   while(true) {
    const action = yield take (taskTypes.FETCH_TASK)
    yield put (showLoading())
    const {params} = action.payload
    const res = yield call(getList, params)// dau vao la 1 func
    const {status, data} = res
    if(status === STATUS_CODE.SUCCESS) {
        // dispatch action fetchListTaskSuccess
        yield put(fetchListTaskSuccess(data))// dau vao la 1 action
    } else {
        //  dispatch action fetchListTaskFailed
        yield put(fetchListTaskFailed(data))
    }
    yield delay(500)
    yield put(hideLoading())
   }
}

function* filterTaskSaga({payload}) {
    yield delay(500)
    const {keyword} = payload
    yield put(fetchListTask({
      q: keyword
    }))
}

function* addTaskSaga({payload}) {
  const {title, des} = payload
  yield put(showLoading())
  const res = yield call(addTask, {
    title,
    des,
    status: 0
  });
  const {data, status} = res
  if(status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data))
    yield put(hideModal())
  } else {
    yield put(addTaskFailed(data))
  }
  yield delay(500)
  yield put(hideLoading())
}

function* updateTaskSaga({payload}) { // payload từ action UPDATE_TASK
  const {title, des, status} = payload
  // cần phải có id task update => lấy từ store => dùng select
  const taskEditing = yield select(state=> state.task.taskEditing)
  yield put(showLoading())
  const res = yield call(updateTask, {title, des, status}, taskEditing.id)

  const {data, status: statusCode} = res
  if(statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(data))
    yield put(hideModal())
  } else {
    yield put(updateTaskFailed(data))
  }
  yield delay(500)
  yield put(hideLoading())
}

function* deleteTaskSaga({payload}) {
  const {id} = payload
  yield put(showLoading())
  const res = yield call(deleteTask, id)
  console.log('resss in saga:', res)
  const {data, status} = res
  if(status === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess(id)) // data từ res trả về không có giá trị nên lấy chính id delete truyền vào reducer
    yield put(hideModal())
  } else {
    yield put(deleteTaskFailed(data))
  }
  yield delay(500)
  yield put(hideLoading())
}

// function* watchCreateTaskAction() {
//     console.log('watchCreateTaskAction')
// }

function* rootSaga() {
    // non-blocking: các generator phía dưới thực hiện mà ko chờ nhau
    yield fork(watchFetchListTaskAction)
    //yield fork(watchCreateTaskAction)
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga)
    yield takeEvery(taskTypes.ADD_TASK, addTaskSaga)
    yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga)
    yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga)
}

export default rootSaga // điều phối những saga còn lại

// saga laf 1 tiến trình, 1 background process dùng để lắng nghe action ,
