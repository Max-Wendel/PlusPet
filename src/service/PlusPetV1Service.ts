import axios from 'axios';


const PlusPetV1Service = axios.create({
  baseURL: 'https://pluspet-backend-production.up.railway.app',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(localStorage.getItem('token')||'{"error":true}')
  }
});

export default PlusPetV1Service;