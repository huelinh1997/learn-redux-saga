import axiosService from '../commons/axiosService';
import qs from 'query-string'

const url = 'tasks';

export const getList = (params={}) => {
  let queryParams = '';
  if(Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`
  }

  return axiosService.get(`${url}${queryParams}`);
}

export const addTask = (data) => {
  return axiosService.post(`${url}`, data);
}

export const updateTask = (data, idTaskUpdate) => {
  return axiosService.put(`${url}/${idTaskUpdate}`, data);
}

export const deleteTask = (idTask) => {
  return axiosService.delete(`${url}/${idTask}`);
}
