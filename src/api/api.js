import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://pocket-dex-api.vercel.app',
});

export default apiInstance;
