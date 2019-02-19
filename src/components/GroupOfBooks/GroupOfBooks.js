import React from 'react';
import './GroupOfBooks.css';
import BookCard from '../BookCard/BookCard';

const GroupOfBooks = () => (
  <div className="content-width">
    <div className="author-name">
      <span>J K Rowling</span>
    </div>
    <div className="same-author">
      <div className="book-cards">
        <BookCard Name="Harry" rating="4.2" likedData />
        <BookCard Name="Harry" rating="4.2" likedData />
        <BookCard Name="Harry" rating="4.2" likedData />
        <BookCard Name="Harry" rating="4.2" likedData />
      </div>
    </div>
  </div>
);
export default GroupOfBooks;
