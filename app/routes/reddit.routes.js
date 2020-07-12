module.exports = app => {
  const reddit = require("../controllers/reddit.controller.js");
  var router = require("express").Router();
  router.post("/", reddit.uplifting);
  // The route called will be preceded by the following.
  app.use('/api/reddit', router);
};
