import React from 'react';
import {
  Card, CardMedia, CardContent, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

function PokemonEvolutionCard({ id, name, pokemonImage }) {
  return (
    <Link to={`/pokemons/${id}`}>
      <Card>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          width="140"
          image={pokemonImage}
        />
        <CardContent>
          <Typography variant="subtitle1">{name}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PokemonEvolutionCard;
