// import Labels from 'app/labels';
import axios, { InternalAxiosRequestConfig } from 'axios';
import instance from '../axiosConfig';
// import { handleDatesIn, handleDatesOut } from 'utils/DateUtils';
// import { insereBarra } from 'utils/formatador';

// const env = (window as any).env;
const PlusPetV1Service = axios.create({
  baseURL: 'http://localhost:8080',
    // env.REACT_APP_PLUSPET_API_ENDPOINT,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(localStorage.getItem('token') || '{}')
  }
});

export default PlusPetV1Service;
