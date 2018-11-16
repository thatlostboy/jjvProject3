const router = require("express").Router();
// const booksController = require("../../controllers/booksController");

/*
// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);
*/


// get receipe list by ingredient
router.get("/ingredient", (req, res) => {
  console.log("api search ingredient API got called!")
  const search = req.query.ingredient
  const urlReq = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients"
  console.log(urlReq," ", search)
});


// find receipe by ID
router.get("/id", (req, res) => {
  console.log("api recipe ID API got called!")
});

module.exports = router
