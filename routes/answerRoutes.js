const express = require("express");
const router = express.Router();
//answer controllers
const { postanswer, getallanswer } = require("../controller/answerController");
//authentication middleware
//const { postanswer, getallanswers} = require("../controller/answerController");
router.post("/postanswer", postanswer)
router.get("/getallanswer", getallanswer);
  

module.exports = router