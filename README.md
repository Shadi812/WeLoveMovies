# WeLoveMovies Back-end App

## Project Overview
> Created a database and restful API that returns information about movies, reviews, theaters, and critics to help user decide which movie to see and where to see it.

## Tasks:

- Build API following RESTful design principles.
- Install and use common middleware packages.
- Access information through route and query parameters.
- Create error handler for cases where route doesn't exist.
- Write database queries to complete CRUDL routes in Express server.
- Use Knex to write database migrations.
- Deploy back-end server.

## Built With:

- Node.js
- Express.js
- Knex.js
- PostgreSQL

## Routes:

### Movies

- /movies
  - GET returns all columns for each movie in database
 
- /movies?is_showing=true
  - GET returns all columns for each movie currently showing in database
  
- /movies/:movieId
  - GET returns all columns for movie with specific ID

- /movies/:movieId/theaters
 - GET returns all columns for theaters where movie with specific ID is playing
 
- /movies/:movieId/reviews
  - GET returns all columns for each review of movie with specific ID
  
### Reviews

- /reviews/:reviewId
  - PUT updates data for review with specific ID and returns all columns for that review
  - DELETE removes review with specific ID from database
  
### Theaters

- /theaters
  - GET returns all columns for each theater in database




 

  







