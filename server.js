const express = require("express");
const helmet = require("helmet");

const RecipeRouter = require("./routers/recipeRouter");
const IngredientRouter = require("./routers/ingredientRouter");

const server = express();
server.use(helmet());
server.use(express.json());

server.use("/api/recipes", RecipeRouter);
server.use('/api/ingredients', IngredientRouter);

module.exports = server;
