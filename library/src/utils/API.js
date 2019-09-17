import axios from "axios";
import { BookList } from "../components/BookList";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the book api for
export default {
  getBooks: function(query) {
    console.log(query)
    return axios.get("/api/books", { params: { q: query } });
  },
  saveBook: function (book){
    return axios.post("/api/books/saved", book);
  },
  getSavedBooks: function (){
    return axios.get("/api/books/saved")
  },
  deleteBook: function (id){
    return axios.delete(`/api/books/saved/${id}`)
  }
};
