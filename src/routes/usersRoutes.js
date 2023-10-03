const { Router } = require("express");

const usersControllers = require ("../controllers/usersControllers");

const userRoutes = Router();

const UsersControllers = new usersControllers();

userRoutes.post("/", UsersControllers.createUsers);

module.exports = userRoutes;