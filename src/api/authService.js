import apiInstance from './api';

const registerUser = ({ email, username, password }) => {
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

export default registerUser;
