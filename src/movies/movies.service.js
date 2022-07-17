
const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

const reduceCritics = reduceProperties("review_id", {
  critic_id: ["critic", "critic_id"],
  preferred_name: ["critic", "preferred_name"],
  surname: ["critic", "surname"],
  organization_name: ["critic", "organization_name"],
});

function list() {
  return knex("movies").select("*");
}

function read(movie_id) {
  return knex("movies").select("*").where({ movie_id }).first();
}

function listMoviesInTheaters() {
  return knex("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .select("m.*")
    .where({ "mt.is_showing": true })
    .distinct("m.movie_id")
    .orderBy("m.movie_id");
}

function listTheatersForMovie(movie_id) {
    return knex("theaters as t")
    .join("movies_theaters as mt", "mt.theater_id", "t.theater_id")
    .select("t.*", "mt.*")
    .where({ "mt.movie_id": movie_id })
    .orderBy("t.theater_id");
}

function listReviews(movie_id) {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("r.*", "c.*")
    .where({ "r.movie_id": movie_id })
    .then(reduceCritics);
}

module.exports = {
  list,
  listMoviesInTheaters,
  read,
  listTheatersForMovie,
  listReviews,
};