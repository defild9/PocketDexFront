import { getToken } from '../utils/authentication';
import apiInstance from './api';

const getMe = () => {
  const token = getToken();
  return apiInstance.get('/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      if (error.response && (error.response.status === 500 || error.response.status === 404)) {
        throw new Error(error.response.data.message);
      }
    });
};

export default getMe;
