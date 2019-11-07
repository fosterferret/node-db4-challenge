exports.seed = function(knex) {
  return knex("recipe_ingredients").insert([
    { recipeId: 4, ingredientId: 4, ingredient_quantity: 2 },
    { recipeId: 4, ingredientId: 4, ingredient_quantity: 2 }
  ]);
};
