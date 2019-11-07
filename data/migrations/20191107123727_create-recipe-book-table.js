exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
      table
        .string("name", 100)
        .notNullable()
        .unique();
      table.string("description", 100);
    })
    .createTable("ingredients", table => {
      table.increments();
      table
        .string("name", 100)
        .notNullable()
        .unique();
    })
    .createTable("instructions", table => {
      table.increments();
      table.integer("step").notNullable();
      table.string("instruction", 300).notNullable();
      table
        .integer("recipeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("recipe_ingredients", table => {
      table.increments();
      table
        .integer("recipeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("ingredientId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.float("ingredient_quantity").notNullable();
      table.unique(["recipeId", "ingredientId"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
