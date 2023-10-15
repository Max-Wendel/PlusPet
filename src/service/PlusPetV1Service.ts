import axios from 'axios';


const PlusPetV1Service = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(localStorage.getItem('token')||'{}')
  }
});

export default PlusPetV1Service;