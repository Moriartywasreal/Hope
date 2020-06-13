// 1.This file handles the routes related to NewsApi and getting the data inside our databases.
// 2.This file has two routes:
//   a)headlines -> for getting the headlines from the newsApi along with the parameters and calling the function associated.
//   b)everything -> for getting everything from the newsAPi along with the parameters and calling the function associated.
// 3.This file refers to functions in the newsapi.controller.js.


module.exports = app => {
  const newsApi = require("../controllers/newsapi.controller.js");
  var router = require("express").Router();
  router.post("/headlines/", newsApi.headlines);
  router.post("/everything", newsApi.everything);
  // The route called will be preceded by the following.
  app.use('/api/autoContent', router);
};
