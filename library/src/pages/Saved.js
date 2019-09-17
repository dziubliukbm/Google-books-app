import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

class Saved extends Component {
  state = {
    books: [],
  };

componentDidMount() {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

 handleDeleteBook = (id) => {
  API.deleteBook(id).then(({ data }) => {
    const updatedBooks = this.state.books.filter(({ _id }) => _id !== data._id)
    this.setState({ books: updatedBooks })
  })
}

  render() {
    return (
      <div>
        <Jumbotron />
        
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
                        deleteBook={this.handleDeleteBook}
                        id={book._id}
                        title={book.title}
                        href={book.href}
                        author={book.author}
                        thumbnail={book.thumbnail}
                        description={book.description}
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

export default Saved;
