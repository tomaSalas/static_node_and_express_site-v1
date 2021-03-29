const express = require("express");
const data = require("../data.json");
const router = express.Router();



router.get('/', (req, res) => {
    res.render("index", { projects: data });
  
  });





  module.exports = router;