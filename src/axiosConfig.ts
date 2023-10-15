import axios from "axios";
const instance = axios.create();
instance.defaults.baseURL='https://pluspet-backend-production.up.railway.app';
instance.defaults.headers.common['Accept']='*/*';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;