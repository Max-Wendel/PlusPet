import axios, {InternalAxiosRequestConfig} from "axios";
const instance = axios.create();
instance.defaults.baseURL='http://localhost:8080/';
instance.defaults.headers.common['Accept']='*/*';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;