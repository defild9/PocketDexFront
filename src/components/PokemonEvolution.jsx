/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardContent, Typography, Grid, CardMedia,
} from '@mui/material';
import { getPokemon } from '../api/pokemonService';
import PokemonEvolutionCard from './PokemonEvolutionCard';

function PokemonEvolution({ evolutions }) {
  const [evolvedPokemons, setEvolvedPokemons] = useState([]);

  useEffect(() => {
    const fetchEvolvedPokemonData = async () => {
      if (Array.isArray(evolutions) && evolutions.length > 0) {
        const evolvedPokemonData = await Promise.all(
          evolutions.map(async (evolution) => {
            try {
              const data = await getPokemon({ id: evolution.evolution_id });
              return data;
            } catch (error) {
              console.error('Error:', error);
              return null;
            }
          }),
        );

        setEvolvedPokemons(evolvedPokemonData);
      }
    };

    fetchEvolvedPokemonData();
  }, [evolutions]);

  return (
    <Box mt={2}>
      {evolvedPokemons.length > 0 && (
        <Card>
          <CardContent>
            <Typography variant="h4" align="center">Evolution</Typography>
          </CardContent>
          <CardContent>
            <Grid container spacing={2}>
              {evolvedPokemons.map((evolvedPokemon, index) => (
                <Grid item key={evolvedPokemon._id} xs={12} sm={6} md={4} lg={3}>
                  <PokemonEvolutionCard
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

export default PokemonEvolution;
