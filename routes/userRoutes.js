const express = require("express");
const router = express.Router();
//authentication middleware
const authmiddleware = require("../middleware/authmiddleware");

//userControllers
const { register, login, checkUser } = require("../controller/userController");

// Register user
router.post("/register", register);

// Login user
router.post("/login", login);

// Check user
router.get("/check", authmiddleware, checkUser);

// //question 
// router.post("/question");

module.exports = router;
