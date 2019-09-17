const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");
const key = "AIzaSyDPjB_8jU30fhmIb8coQsQPp43zyGsXBec";

// Matches with "/api/books"
router.get("/books", ({ query: { q } }, res) => {
    axios.get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        q,
        key
      }})
      .then(({ data: { items } }) => res.json(items))
      .catch(err => res.status(422).json(err));
  })

  // gets saved books from mongodb
  router.get("/books/saved", booksController.findAll)

  // saves a book to mongodb
  router.post("/books/saved", booksController.create);

  router.delete("/books/saved/:id", booksController.remove);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;