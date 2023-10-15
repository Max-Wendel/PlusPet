import axios from "axios";
const instance = axios.create();
instance.defaults.baseURL='https://pluspet-api.ashystone-e3d6e0e7.eastus.azurecontainerapps.io/';
instance.defaults.headers.common['Accept']='*/*';
instance.defaults.headers.post['Content-Type'] = 'application/json';
// instance.defaults.headers.common['Authorization'] = ""
export default instance;