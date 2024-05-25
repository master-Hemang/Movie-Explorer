import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

const openTrailer = (title) => {
  const searchQuery = `${title} trailer`;
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
  window.open(url, '_blank');
};

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <Typography variant="h6" color="error" align="center">No movies found.</Typography>;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="500"
                image={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                alt={movie.Title}
              />
              <CardContent>
                <Typography 
                  variant="h6" 
                  onClick={() => openTrailer(movie.Title)} 
                  sx={{ cursor: 'pointer', color: 'primary.main', textDecoration: 'underline' }}
                >
                  {movie.Title} ({movie.Year})
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  {movie.Plot}
                </Typography>
                <Typography variant="body1" color="textPrimary" sx={{ mt: 2 }}>
                  IMDb Rating: {movie.imdbRating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
