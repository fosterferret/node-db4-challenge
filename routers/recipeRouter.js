const express = require("express");
const Recipes = require("../models/recipes");
const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(ingredients => {
      if (ingredients.length) {
        res.status(200).json(ingredients);
      } else {
        res
          .status(400)
          .json({ message: "Could not find ingredients for that recipe" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to get shopping list for that recipe" });
    });
});

router.get("/:id/instructions", (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(instructions => {
      if (instructions.length) {
        res.status(200).json(instructions);
      } else {
        res
          .status(400)
          .json({ message: "Could not find instructions for that recipe" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to get instructions for that recipe" });
    });
});

module.exports = router;
