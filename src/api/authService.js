import apiInstance from './api';

export const registerUser = ({ email, username, password }) => {
  const userData = {
    username,
    email,
    password,
  };

  return apiInstance.post('/auth/register', userData)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Error during user registration');
    })
    .catch((error) => {
      throw error;
    });
};
export const loginUser = ({ email, password }) => {
  const userData = {
    email,
    password,
  };

  return apiInstance.post('/auth/login', userData)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Failed to authorize');
    })
    .catch((error) => {
      if (error.response && (error.response.status === 500 || error.response.status === 404)) {
        throw new Error(error.response.data.message);
      } else if (error.response && error.response.status === 400) {
        throw new Error(error.response.data.message);
      }
    });
};
