import React, { useState } from 'react';
import {
  Card, CardMedia, CardContent, Typography, IconButton, Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

function PokemonCardWithFavouriteButton({ id, name, pokemonImage }) {
  const [isFavorite, setIsFavorite] = useState(true);

  const handleToggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <Card>
      <Link to={`/pokemons/${id}`}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          width="140"
          image={pokemonImage}
        />

      </Link>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">{name}</Typography>
          <IconButton
            onClick={handleToggleFavorite}
            color={isFavorite ? 'error' : 'primary'}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PokemonCardWithFavouriteButton;
