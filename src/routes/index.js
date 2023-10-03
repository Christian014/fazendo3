const { Router } = require("express");
const userRoutes = require("./usersRoutes");
const moviesRoutes = require("./moviesRoutes");
const tagsRoutes = require("./tagsRoutes")

const routes = Router();

routes.use("/tags", tagsRoutes);
routes.use("/users", userRoutes);
routes.use("/movies", moviesRoutes);


module.exports = routes;