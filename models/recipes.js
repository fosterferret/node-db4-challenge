const db = require("../data/dbConfig");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("ingredients")
    .join(
      "recipe_ingredients",
      "recipe_ingredients.ingredientId",
      "ingredients.id"
    )
    .select("ingredients.name", "ingredient_quantity")
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db("instructions")
    .join("recipes", "recipes.id", "instructions.recipeId")
    .select("name", "step_number", "instruction")
    .where({ recipe_id })
    .orderBy("step_number");
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
