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
    'Authorization': JSON.parse(localStorage.getItem('token')||'')
  }
});

export default PlusPetV1Service;

// const instance = axios.create();
// instance.defaults.baseURL='http://localhost:8080/';
// instance.defaults.headers.common['Accept']='*/*';
// instance.defaults.headers.post['Content-Type'] = 'application/json';
// // instance.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwbHVzcGV0LWF1dGgtYXBpIiwic3ViIjoiZHJtYXJjb3MiLCJleHAiOjE2OTc0MDE1MTB9.QKrUEqFewmIhJta_MnvowbV_Uu5kfKtqysn18wZoOG0'
