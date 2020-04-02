var express = require("express");
var router = express.Router();
var utilities = require("../utilities");

/* GET users listing. */
router.get("/", async function(req, res, next) {
  //console.log(process.env.RESPONSEDELAYTIME);
  await utilities.sleep(process.env.RESPONSEDELAYTIME).then(() => {});
  //console.log('ping request');
  res.json("ping successful.");
});

module.exports = router;
