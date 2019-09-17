import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button"
import "./style.css"
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  thumbnail,
  title,
  author,
  href,
  description,
  id,
  saveBook,
  deleteBook
}) {
  return (
    <li className="list-group-item center" id={id}>
       
        <Row>
        <Col size="xs-4 sm-2">
          <h3>{title}</h3>
            <h4>Written by: {author}</h4>
            </Col>
            <Col size="xs-4 sm-8">
            <p></p>
            </Col>
            <Col size="xs-4 sm-1">
              <Button
                type="button"
                className="btn-lg btn-primary btn-block"
              >
                <a rel="noreferrer noopener" target="_blank" href={href}>View</a>
              </Button>
            </Col>

            {saveBook && 
              <Col size="xs-4 sm-1">
                <Button
                  type="button"
                  className="btn-lg btn-success btn-block"
                  onClick={() => saveBook({
                    id,
                    author,
                    title,
                    description,
                    thumbnail,
                    href
                  })}
                >
                  Save 
                </Button>       
              </Col>
            }

          {deleteBook && 
           <Col size="xs-4 sm-1">
              <Button
                type="button"
                className="btn-lg btn-danger btn-block"
                onClick={() => deleteBook(id)}
              >
                Delete 
              </Button>       
            </Col>
          }
          </Row>

          <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-10">
            <p>Description: {description}</p>       
          </Col>
        </Row>
    </li>
  );
}
