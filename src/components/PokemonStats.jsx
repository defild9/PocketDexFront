import React from 'react';
import {
  Box, Card, Typography, Grid, Rating, CardContent,
} from '@mui/material';

function PokemonStats({ stats }) {
  if (!stats) {
    return <Typography variant="body2">No stats available</Typography>;
  }
  return (
    <Box mt={2}>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center">Stats</Typography>
        </CardContent>
        <Box p={3}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6">
                HP
              </Typography>
              <Rating name="hp-rating" value={stats.hp / 20} precision={0.5} readOnly />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Attack</Typography>
              <Rating name="attack-rating" value={stats.attack / 20} precision={0.5} readOnly />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6">
                Defense
              </Typography>
              <Rating name="hp-rating" value={stats.defense / 20} precision={0.5} readOnly />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">SpecialAttack</Typography>
              <Rating name="attack-rating" value={stats.specialAttack / 20} precision={0.5} readOnly />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6">
                SpecialDefense
              </Typography>
              <Rating name="hp-rating" value={stats.specialDefense / 20} precision={0.5} readOnly />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Speed</Typography>
              <Rating name="attack-rating" value={stats.speed / 20} precision={0.5} readOnly />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}

export default PokemonStats;
