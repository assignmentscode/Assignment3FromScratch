import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GroupOfBooks.css';
import BookCard from '../BookCard/BookCard';

class GroupOfBooks extends Component {
  render() {
    const { listOfBooks, author, refreshValue } = this.props;
    const multipleBookCards = listOfBooks.map((book, index) => {
      const likestatus = (index % 2 === 1);
      return (<BookCard Name={book.Name} rating={book.rating} bookId={book.id} likedData={likestatus} key={book.id + refreshValue} />);
    });
    return (
      <div className="content-width same-author-div">
        <div className="author-name">
          <span>{author}</span>
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
  refreshValue: PropTypes.isRequired,
};
export default GroupOfBooks;
