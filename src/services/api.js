import axios from 'axios';

const api = axios.create({
  baseURL: 'https://protected-bastion-57133.herokuapp.com/',
});

export default api;