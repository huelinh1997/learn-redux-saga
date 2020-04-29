import {toast} from 'react-toastify'

export const toastError = err => {
    let mes = null;
    if(typeof err === 'object' && err.message) {
        mes = err.message
    }
    if(mes !== null && typeof mes !== undefined && mes !== ''){
        toast.error(mes)
    }
};

export const toastSuccess = (mes) => {
  if(mes !== null && typeof mes !== undefined && mes !== ''){
    toast.success(mes)
  }
};
