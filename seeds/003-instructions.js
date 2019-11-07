exports.seed = function(knex) {
  return knex("instructions").insert([
    {
      step: 1,
      instruction: "Rip the package apart with the rage of Zeus",
      recipeId: 1
    },
    {
      step: 2,
      instruction: "Throw it into a pot and inshallah",
      recipeId: 1
    }
  ]);
};
