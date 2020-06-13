const db = require("../models");
const Categories = db.categories;
const Op = db.Sequelize.Op;
const Logger = require('../services/logger_service')
const bodyParser = require('body-parser');
const express = require('express')
const app = express();
var datetime = new Date();
datetime=datetime.toISOString().slice(0,10);
const logger = new Logger(datetime);



// Create and Save a new Category
exports.create = (req, res) => {
  logger.setLogData(req.query);
  logger.info("Request recieved at /categories/");
// Validate request
  if (!req.body.title) {
    logger.error("Title can not be empty", req.body);
    res.status(400).send({
      message: "Title can not be empty!"
    });
    return;
  }



// Create a Tutorial
  const categories = {
    title: req.body.title,
    description: req.body.description

  };

  // Save Tutorial in the database
  Categories.create(categories)
    .then(data => {
      if(!req.body.description){
        logger.warn("Description can not be empty", req.categories);
      }
      logger.info("Category created successfully");
      res.send(data);
    })
    .catch(err => {
      logger.error("Some error occurred while creating the Category." ,err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category."
      });
    });
};


// Retrieve all Tutorials from the database.

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Categories.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};






// Find a single Tutorial with an id
exports.findOne = (req, res) => {
 const id = req.params.id;

  Categories.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};



// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Categories.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Category with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Categories.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Category with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Categories.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Categories were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all categories."
      });
    });
};
