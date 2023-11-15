import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardContent, Typography, Grid,
} from '@mui/material';
import { getPokemon } from '../api/pokemonService';
import PokemonCardWithFavouriteButton from './PokemonCardWithFavouriteButton';

function SavedPokemons({ pokemonCollection }) {
  const [savedPokemons, setSavedPokemons] = useState([]);

  useEffect(() => {
    const fetchSavedPokemonData = async () => {
      if (Array.isArray(pokemonCollection) && pokemonCollection.length > 0) {
        const savedPokemonsData = await Promise.all(
          pokemonCollection.map(async (savedPokemon) => {
            try {
              const data = await getPokemon({ id: savedPokemon });
              return data;
            } catch (error) {
              console.error('Error:', error);
              return null;
            }
          }),
        );
        setSavedPokemons(savedPokemonsData);
      }
    };

    fetchSavedPokemonData();
  }, [pokemonCollection]);
  return (
    <Box mt={2}>
      {savedPokemons.length > 0 && (
        <Card>
          <CardContent>
            <Typography variant="h4" align="center">Evolution</Typography>
          </CardContent>
          <CardContent>
            <Grid container spacing={2}>
              {savedPokemons.map((evolvedPokemon, index) => (
                <Grid item key={evolvedPokemon._id}>
                  <PokemonCardWithFavouriteButton
                    id={evolvedPokemon._id}
                    name={evolvedPokemon.name}
                    pokemonImage={evolvedPokemon.pokemonImage}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default SavedPokemons;
