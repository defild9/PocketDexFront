import apiInstance from './api';

export const getAllPokemons = () => apiInstance.get('/pokemons')
  .then((response) => response.data.pokemons)
  .catch((error) => {
    throw error;
  });

export const getPokemon = ({ id }) => apiInstance.get(`/pokemons/${id}`)
  .then((responce) => responce.data.pokemon)
  .catch((error) => {
    throw error;
  });
