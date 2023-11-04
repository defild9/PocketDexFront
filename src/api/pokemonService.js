import apiInstance from './api';

const getAllPokemons = () => apiInstance.get('/pokemons')
  .then((response) => response.data.pokemons)
  .catch((error) => {
    throw error;
  });

export default getAllPokemons;
