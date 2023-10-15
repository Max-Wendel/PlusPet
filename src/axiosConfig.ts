import axios, {InternalAxiosRequestConfig} from "axios";
const instance = axios.create();
instance.defaults.baseURL='http://localhost:8080/';
instance.defaults.headers.common['Accept']='*/*';
instance.defaults.headers.post['Content-Type'] = 'application/json';
// instance.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwbHVzcGV0LWF1dGgtYXBpIiwic3ViIjoiZHJtYXJjb3MiLCJleHAiOjE2OTc0MDE1MTB9.QKrUEqFewmIhJta_MnvowbV_Uu5kfKtqysn18wZoOG0'

export default instance;