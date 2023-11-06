import React from 'react';
import { Grid } from '@mui/material';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemons }) {
  return (
    <Grid container spacing={2}>
      {pokemons.map((pokemon, index) => (
        <Grid item key={pokemon._id} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard
            id={pokemon._id}
            name={pokemon.name}
            pokemonImage={pokemon.pokemonImage}
            description={pokemon.description}
            type={pokemon.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default PokemonList;
