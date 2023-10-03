const { Router } = require("express");

const moviesTagsController = require("../controllers/tagsController");

const tagsRoutes = Router();

const tagsController = new moviesTagsController();

tagsRoutes.post("/", tagsController.createTags);

module.exports = tagsRoutes;