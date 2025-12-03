const express = require("express");
const { addUser, addAdmin, userLogin } = require("../controllers/authController");

const router = express.Router();

router.post("/addUser", addUser);
router.post("/addAdmin", addAdmin);
router.post("/userLogin", userLogin);

module.exports = router;
