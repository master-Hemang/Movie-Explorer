import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';

const genres = [
  { value: '', label: 'Any' },
  { value: 'Action', label: 'Action' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Drama', label: 'Drama' },
  { value: 'Horror', label: 'Horror' },
  // Add more genres as needed
];

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query, genre);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSearch} 
      sx={{ 
        display: 'flex', 
        gap: 2, 
        mb: 4, 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <TextField
        label="Search by Title"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        sx={{ maxWidth: 400 }}
      />
      <TextField
        select
        label="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 200 }}
      >
        {genres.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        sx={{ height: 56 }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
