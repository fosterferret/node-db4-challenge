const express = require("express");
const Ingredients = require("../models/ingredients");
const router = express.Router();

router.get("/:id/recipes", (req, res) => {
  Ingredients.getRecipesByIngredient(req.params.id)
    .then(recipes => {
      if (recipes.length) {
        res.status(200).json(recipes);
      } else {
        res
          .status(404)
          .json({ message: "Could not get recipes for given ingredient" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Could not get recipes by ingredient" });
    });
});

module.exports = router;
