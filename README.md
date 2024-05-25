# Movie-Explorer

Movie Explorer is a web application that allows users to search for movies by title and genre and displays its relevant information.

## Tech Stack
- **Frontend:** React, Axios, Material-UI
- **Backend:** Node.js, Express, Axios
- **External API:** OMDb API

## Features
- Search movies by its title .
- Movies can be filtered by its Genre for a given title .
- Display movie details such as title, year, synopsis, IMDb Rating and poster image.
- Easily obtain the movie's Youtube trailer by clicking on it .
- User-friendly interface with search input and movie listings.

## Setup and Installation
1. **Frontend:**
   - Navigate to the `frontend` directory and install dependencies.
     ```bash
     cd frontend
     npm install
     ```
   - Start the React development server.
     ```bash
     npm start
     ```

2. **Backend:**
   - Navigate to the `backend` directory and install dependencies.
     ```bash
     cd backend
     npm install
     ```
   - Replace `YOUR_OMDB_API_KEY` in `backend/routes/movies.js` with your OMDb API key.
   - Start the Node.js server.
     ```bash
     node app.js
     ```

## Deployment
- The application has been deployed using Vercel.

## Assumptions
- The application uses a simple mock API for movie search and details.
- The OMDb API key is required for the backend to function properly.

## Challenges
- Handling API rate limits from the OMDb API.
- Ensuring cross-origin requests work seamlessly.
- Deploying the backend and frontend on a hosting platform .

## Future Enhancements
- Implement user authentication for a personalized experience.
