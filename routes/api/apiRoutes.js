const axios = require("axios");
const router = require("express").Router();
const key = "AIzaSyDPjB_8jU30fhmIb8coQsQPp43zyGsXBec";

router.get("/books", ({ query: { q } }, res) => {
  axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      q,
      key
    }})
    .then(({ data: { items } }) => res.json(items))
    .catch(err => res.status(422).json(err));
});


module.exports = router;
