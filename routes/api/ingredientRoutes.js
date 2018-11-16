const router = require("express").Router();
const axios = require("../../models")

// get ingredient group
router.get("/groups", (req, res) => {
  console.log("this is group like vegetables, fruit, meat, fish")
  res.json("vegetable, meat, fish, vegetable")
});


// find receipe by ID
router.get("/groups/:id", (req, res) => {
  console.log("this is the specific ingredient like salmon, chicken breast")
  res.json("beets, carrots, celery")
});

module.exports = router
