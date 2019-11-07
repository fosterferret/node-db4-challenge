const db = require("../data/dbConfig");

function getRecipesByIngredient(ingredient_id) {
  return db("recipes")
    .join("recipe_ingredients as ri", "ri.recipeId", "recipes.id")
    .join("ingredients as i", "i.id", "ri.ingredientId")
    .select("i.name as ingredient", "recipes.name as recipe")
    .where({ ingredient_id });
}

module.exports = {
  getRecipesByIngredient
};
