const express = require("express");
const router = express.Router();
const { googleLogin } = require("../controllers/googleAuthController");

router.post("/googleLogin", googleLogin);

module.exports = router;
