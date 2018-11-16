const path = require("path");
const router = require("express").Router();
const recipeRoutes = require("./recipe");

// api Routes
router.use("/recipe",recipeRoutes)

module.exports = router;

