import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

class Search extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log({ [name]: value });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({books : res.data}))
      .catch(err => console.log(err));  
      console.log(this.state.books)
  };

  handleSaveBook = book => {
    API.saveBook(book)
    .catch(err => console.log(err));  
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <form>
          <Input
            onClick={this.handleFormSubmit}
            name="bookSearch"
            value={this.state.bookSearch}
            onChange={this.handleInputChange}
            placeholder="Search For a Book"
          />
        </form>
        <div className="jumbotron">
         
        <Row>
            <Col size="xl-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem
                        saveBook={this.handleSaveBook}
                        id={book.id}
                        title={book.volumeInfo.title}
                        href={book.volumeInfo.canonicalVolumeLink}
                        author={book.volumeInfo.authors}
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                        description={book.volumeInfo.description}
                      />
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
          </div>
      </div>
    );
  }
}

export default Search;