import axios from 'axios';

const API_URL = 'https://reqres.in/api';

const httpService = axios.create({
  baseURL: API_URL,
});

export default httpService;
