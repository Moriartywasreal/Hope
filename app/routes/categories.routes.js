// 1.This file handles the routes related to categories and getting the data inside our databases.
// 2.This file refers to functions in the categories.controller.js.

module.exports = app => {
  const categories = require("../controllers/categories.controller.js");

  var router = require("express").Router();

  // Create a new Category
  router.post("/", categories.create);

  // Retrieve all Categories
  router.get("/", categories.findAll);

  // Retrieve a single Category with id
  router.get("/:id", categories.findOne);

  // Update a Category with id
  router.put("/:id", categories.update);

  // Delete a Category with id
  router.delete("/:id", categories.delete);

  // Create a new Category
  router.delete("/", categories.deleteAll);

  app.use('/api/categories', router);
};
//debrata basu
