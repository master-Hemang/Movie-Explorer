const express = require('express');
const cors = require('cors');
const moviesRoute = require('./routes/movies');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/movies', moviesRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
