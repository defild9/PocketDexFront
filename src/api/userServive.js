import { getToken } from '../utils/authentication';
import apiInstance from './api';

export const getMe = () => {
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

export const addPokemonToFavourite = ({ idPokemon }) => {
  const token = getToken();

  const requestData = {
    pokemonId: idPokemon,
  };
  return apiInstance.patch('user/addPokemonToCollection', requestData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.message)
    .catch((error) => {
      if (error.response && (error.response.status === 500 || error.response.status === 404)) {
        throw new Error(error.response.data.message);
      }
    });
};

export const removePokemonFromFavourite = ({ idPokemon }) => {
  const token = getToken();

  const requestData = {
    pokemonId: idPokemon,
  };
  return apiInstance.patch('user/removePokemonFromCollection', requestData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.message)
    .catch((error) => {
      if (error.response && (error.response.status === 500 || error.response.status === 404)) {
        throw new Error(error.response.data.message);
      }
    });
};
