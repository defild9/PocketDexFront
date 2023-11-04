/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip } from '@mui/material';

export default function PokemonCard({
  name, pokemonImage, description, type,
}) {
  const getTypeColor = (typeName) => {
    const typeColors = {
      Water: 'primary',
      Fire: 'error',
      Grass: 'success',
    };

    return typeColors[typeName] || 'default';
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pokemonImage}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <div>
            {type.map((typeName, index) => (
              <Chip
                key={index}
                label={typeName}
                color={getTypeColor(typeName)}
              />
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
