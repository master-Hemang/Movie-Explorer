# Movie-Explorer

Movie Explorer is a web application that allows users to search for movies by title or genre and display relevant information.

## Tech Stack
- **Frontend:** React, Axios, Material-UI
- **Backend:** Node.js, Express, Axios
- **External API:** OMDb API

## Features
- Search movies by title or genre.
- Display movie details such as title, year, synopsis, and poster image.
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
- The application can be deployed using platforms like Heroku or Vercel.

## Assumptions
- The application uses a simple mock API for movie search and details.
- The OMDb API key is required for the backend to function properly.

## Challenges
- Handling API rate limits from the OMDb API.
- Ensuring cross-origin requests work seamlessly.

## Future Enhancements
- Add genre filtering.
- Include user ratings and movie trailers if available.
- Implement user authentication for a personalized experience.
