// 1.This is the controller for handling all routes related to NewsAPi mentioned in autoContent.routes.js.
// 2.This fle has 3 methods:
//   a)headlines -> for calling the newsApi to get all headlines along with the requested parameters.
//   b)everything -> for calling the newsApi to get everything along with the requested parameters.
//   c)createNews -> for creating the data in the contents table.
//3.Log File is named as per the date and is referenced as such.


const axios = require('axios');
const express = require('express');
const db = require("../models");
const Contents = db.content;
const Op = db.Sequelize.Op;
var top_headlines = 'http://newsapi.org/v2/top-headlines/';
var everything ='http://newsapi.org/v2/everything/';
var api_key='0651db9c823c4a5992fe58e6bbe1b988';
const Logger = require('../services/logger_service')
const bodyParser = require('body-parser');
const app = express();
var datetime = new Date();
datetime=datetime.toISOString().slice(0,10);
const logger = new Logger(datetime);
var category_id;
// var category_id = 1;

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());
var content_check = new Object();
var final_contents =[{}];

exports.headlines= (req,res)=>{
  logger.setLogData(req.query);
  logger.info("Request recieved at /headlines");
  if(!req.query.category_id){
    logger.error("Category Id cannot be empty", req.query);
    res.status(400).send({
      message: "Category Id can not be empty!"
    });
    return;
  }
  category_id=req.query.category_id;
    axios.get(top_headlines, {
  params: {

    q:req.query.condition,
    country:req.query.country,
    category:req.query.category,
    language:req.query.language,
    apiKey:api_key

  }

}).then(response => {
  const articles=response.data.articles;
   logger.info("NewsApi Headlines called ");


if (response.data.status == "ok")
{
  articles.forEach(obj => {

Object.entries(obj).forEach(([key, value]) => {
     content_check.content=obj.content,
     content_check.title=obj.title,
     content_check.categories_id=category_id,
     content_check.description=obj.description,
     content_check.is_approved="NO",
     content_check.picture_location=null,
     content_check.picture_url=obj.urlToImage,
     content_check.source_url=obj.url
  });

  final_contents.push(content_check);

  content_check=new Object();

});

      res.send(response.data.articles);
      createNews(final_contents);
  }
  else
  {
   logger.error("NewsApi Failed in /headlines. ERROR:", response.data);
   res.message("NewsApi Failed.Please check log for details.");
 };
}).catch(error => {
        logger.error("Error while inserting data",error.message);
        res.send(error);
      });

};

exports.everything= (req,res)=>{

// console.log(req);
    axios.get(everything, {
  params: {
    q:req.body.condition,
    country:req.body.country,
    category:request.body.category,
    apiKey:api_key

  }

}).then(response => {
  const articles=response.data.articles;
  // console.log(response.data);
    articles.forEach(obj => {

  Object.entries(obj).forEach(([key, value]) => {
       content_check.content=obj.content,
       content_check.title=obj.title,
       content_check.categories_id=category_id,
       content_check.description=obj.description,
       content_check.is_approved="NO",
       content_check.picture_location=null,
       content_check.picture_url=obj.urlToImage,
       content_check.source_url=obj.url
    });

    final_contents.push(content_check);

   content_check=new Object();

});

        res.send(response.data.articles);
        createNews(final_contents);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });

};

 function createNews(final_contents)
 {
   logger.info("NewsApi Data entered in Database");
   final_contents.forEach(obj => {
   if(obj.title != null)
   {
     Contents.create(obj);
   }
 });
};
