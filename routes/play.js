const express = require("express");
const router = express.Router();

router.get("/play", (req, res) => {
  //update with correct view file
  res.render("game");
});

module.exports = router;
