const axios = require('axios');
const express = require('express');
const db = require("../models");
const Contents = db.content;
const Op = db.Sequelize.Op;
var upliftingNews = 'https://www.reddit.com/r/upliftingnews/new.json?sort=new';

const Logger = require('../services/logger_service')
const bodyParser = require('body-parser');
const app = express();
var datetime = new Date();
datetime=datetime.toISOString().slice(0,10);
const logger = new Logger(datetime);
var category_id;


exports.uplifting= (req,res)=>{
  console.log("HERE");
  logger.setLogData(req.query);
  logger.info("Request received at /reddit");
  if(!req.query.category_id){
    logger.error("Category Id cannot be empty", req.query);
    res.status(400).send({
      message: "Category Id can not be empty!"
    });
    return;
  }
  category_id=req.query.category_id;
    axios.get(upliftingNews, {}).then(response => {
  const articles=(response.data.children);
   logger.info("Reddit Headlines called " , response.data);
   res.send(response.data);
}).catch(error => {
        logger.error("Error while inserting data",error.message);
        res.send(error);
      });

};
