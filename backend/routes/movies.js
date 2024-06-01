const express = require('express');
const axios = require('axios');

const router = express.Router();
const API_KEY = process.env.OMDB_API_KEY;  // Use environment variable

router.get('/', async (req, res) => {
  const { query, genre } = req.query;
  try {
    const searchUrl = genre 
      ? `http://www.omdbapi.com/?s=${query}&type=movie&apikey=${API_KEY}`
      : `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    const response = await axios.get(searchUrl);
    const movies = response.data.Search;

    if (!movies) {
      return res.status(404).json({ message: 'No movies found' });
    }

    const movieDetailsPromises = movies.map(async (movie) => {
      const movieDetailsResponse = await axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`);
      return movieDetailsResponse.data;
    });

    const movieDetails = await Promise.all(movieDetailsPromises);

    const filteredMovies = genre 
      ? movieDetails.filter(movie => movie.Genre && movie.Genre.includes(genre))
      : movieDetails;

    res.json(filteredMovies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
