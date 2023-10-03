const { Router } = require("express");
const moviesControllers = require("../controllers/moviesControllers");
const moviesRouter = Router();


const MoviesControllers = new moviesControllers();

moviesRouter.post("/", MoviesControllers.createMovies);

module.exports = moviesRouter;