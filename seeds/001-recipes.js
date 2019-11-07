exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      name: "Indomie Chicken",
      description: "Indomie good oooh, e good ooh"
    }
  ]);
};
