/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Grid, Box, Typography, Card, Chip, IconButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getPokemon } from '../../api/pokemonService';
import PokemonStats from '../../components/PokemonStats';
import PokemonEvolution from '../../components/PokemonEvolution';
import { addPokemonToFavourite, getMe, removePokemonFromFavourite } from '../../api/userServive';

function DetailPokemon() {
  const params = useParams();
  const [pokemon, setPokemon] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getTypeColor = (typeName) => {
    const typeColors = {
      Water: 'primary',
      Fire: 'error',
      Grass: 'success',
    };

    return typeColors[typeName] || 'default';
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const data = await getPokemon({ id: params.id });
        setPokemon(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPokemonData();
  }, [params.id]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getMe();
        if (userData) {
          setIsAuthenticated(true);
        }

        const isPokemonInCollection = userData.pokemonCollection.includes(params.id);
        setIsFavorite(isPokemonInCollection);
      } catch (error) {
        setIsAuthenticated(false);
        console.error('Error:', error);
      }
    };

    fetchUserData();
  }, [params.id]);

  const handleAddToFavorites = async () => {
    try {
      const idPokemon = params.id;
      if (isFavorite) {
        await removePokemonFromFavourite({ idPokemon });
      } else {
        await addPokemonToFavourite({ idPokemon });
      }
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    } catch (error) {
      console.error('Error handling favorites:', error);
    }
  };

  return (
    <Box>
      <Container className="side">
        <Typography variant="h2" align="center">
          {pokemon.name}
          {isAuthenticated && (
          <IconButton
            onClick={handleAddToFavorites}
            color={isFavorite ? 'error' : 'primary'}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
          )}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 350, md: 400 },
                maxWidth: { xs: 350, md: 400 },
              }}
              alt={pokemon.name}
              src={pokemon.pokemonImage}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">{pokemon.description}</Typography>
            <Box mt={2}>
              <Card>
                <Box p={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={6}>
                      <Typography variant="h6">Height</Typography>
                      <Typography>{pokemon.height}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Typography variant="h6">Weight</Typography>
                      <Typography>{pokemon.weight}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">Abilities</Typography>
                      {pokemon.abilities && pokemon.abilities.map((ability, index) => (
                        <Typography key={index} variant="body2">{ability}</Typography>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Box>
            <Box mt={2}>
              <Typography variant="h6">Type</Typography>
              {pokemon.type && pokemon.type.map((typeName, index) => (
                <Chip
                  key={index}
                  label={typeName}
                  color={getTypeColor(typeName)}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
        <PokemonStats stats={pokemon.stats} />
        {pokemon.evolutions && pokemon.evolutions.length > 0 ? (
          <PokemonEvolution evolutions={pokemon.evolutions} />
        ) : null}
      </Container>
    </Box>
  );
}

export default DetailPokemon;
