import React from 'react';
import './BookCard.css';

const blackHeart = require('./../../Assets/heart-black.svg');
const redHeart = require('./../../Assets/heart-red.svg');
const imagePath = require('./../../Assets/cover_image.jpeg');

const BookCard = props => (
  <div className="card">
    <img src={imagePath} alt="Book" className="blog-image" />
    <p className="post-heading">{props.Name}</p>
    <div>
      <span className="ratings ">{props.rating}</span>
      <img src={(props.likedData === true) ? redHeart : blackHeart} alt="Heart" className="heart-logo" />
    </div>
  </div>
);
export default BookCard;
