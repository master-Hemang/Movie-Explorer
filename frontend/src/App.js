import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query, genre) => {
    try {
      const response = await axios.get('/api/movies', {
        params: { query, genre }
      });
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
  };

  return (
    <Container sx={{ pt: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Movie Explorer
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </Container>
  );
};

export default App;
