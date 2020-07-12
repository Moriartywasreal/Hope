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



// Create a Category
  const categories = {
    title: req.body.title,
    description: req.body.description

  };

  // Save Category in the database
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
          err.message || "Oops! It's not you,its us.We will be up and running soon"
      });
    });
};


// Retrieve all Categories from the database.

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  logger.setLogData(req.query);
  logger.info("Request recieved at /categories/");
  Categories.findAll({ where: condition })
    .then(data => {
      logger.info("Categories fetched successfully");
      res.send(data);
      })
    .catch(err => {
      logger.error("Some error occurred while retrieving categories.", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};






// Find a single Category with an id
exports.findOne = (req, res) => {
 const id = req.params.id;
 logger.setLogData(req.query);
 logger.info("Request recieved at /categories/:id", id);
  Categories.findByPk(id)
    .then(data => {
      logger.info("Category fetched successfully");
      res.send(data);
    })
    .catch(err => {
      logger.error("Error retrieving Category with id=" + id);
      res.status(500).send({
        message: "Error retrieving Category with id=" + id
      });
    });
};



// Update a Category by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  logger.setLogData(req.query);
  logger.info("Request recieved at /categories/:id", id);
  Categories.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        logger.info("Category was updated successfully.");
        res.send({
          message: "Category was updated successfully."
        });
      } else {
        logger.error("Cannot update Category with id=",id);
        // logger.error("Request Body : "req.body);
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      logger.error("Cannot update Category with id=",id);
      // logger.error("Request Body : "req.body);
      logger.error("Error : ",err);
      res.status(500).send({
        message: "Error updating Category with id=" + id
      });
    });
};

// Delete a Category with the specified id in the request
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

// Delete all Categorys from the database.
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
