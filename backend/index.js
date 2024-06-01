const express = require('express');
const cors = require('cors');
const axios = require('axios');
const moviesRouter = require('./routes/movies');

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: 'https://movie-explorer-gamma.vercel.app/',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());
app.use('/api/movies', moviesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
