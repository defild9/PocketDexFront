import React, { useState, useEffect } from 'react';
import {
  Box, Container, Pagination, Grid, FormControl, InputLabel, Select, MenuItem, TextField,
} from '@mui/material';
import PokemonList from '../../components/PokemonList';
import getAllPokemons from '../../api/pokemonService';
import './Pokemons.css';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getAllPokemons();
        setPokemons(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPokemons();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredPokemons = pokemons.filter(
    (pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const currentPokemons = filteredPokemons.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeItemsPerPage = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <Box className="side">
      <Container>
        <Grid container justifyContent="flex-end" alignItems="center" mb={2}>
          <Grid item>
            <InputLabel>Show Items Per Page:</InputLabel>
          </Grid>
          <Grid item>
            <Box ml={2}>
              <FormControl>
                <Select
                  value={itemsPerPage}
                  onChange={handleChangeItemsPerPage}
                  label="Show Items Per Page"
                  size="small"
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <TextField
          label="Search by Name"
          value={searchTerm}
          onChange={handleSearch}
          fullWidth
          variant="outlined"
          margin="dense"
          size="small"
        />
        <PokemonList pokemons={currentPokemons} />
        <Grid container justifyContent="center" mt={3}>
          <Pagination
            count={Math.ceil(filteredPokemons.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
          />
        </Grid>
      </Container>
    </Box>
  );
}

export default Pokemons;
