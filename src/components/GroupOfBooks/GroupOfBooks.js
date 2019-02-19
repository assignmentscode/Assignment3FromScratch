import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GroupOfBooks.css';
import BookCard from '../BookCard/BookCard';

class GroupOfBooks extends Component {
  render() {
    const multipleBookCards = this.props.listOfBooks.map(book => (<BookCard Name={book.Name} rating={book.rating} likedData key={book.id} />));
    return (
      <div className="content-width same-author-div">
        <div className="author-name">
          <span>{this.props.author}</span>
        </div>
        <div className="same-author">
          <div className="book-cards">
            {multipleBookCards}
          </div>
        </div>
      </div>
    );
  }
}
GroupOfBooks.propTypes = {
  author: PropTypes.string.isRequired,
  listOfBooks: PropTypes.array.isRequired,
};
export default GroupOfBooks;
