import React from 'react';
import './BookCard.css';

const whiteHeart = require('./../../Assets/heart-black.svg');
const redHeart = require('./../../Assets/heart-red.svg');
const imagePath = require('./../../Assets/cover_image.jpeg');

const BookCard = props => (
  <div className="card">
    <img src={imagePath} alt="Book" className="blog-image" />
    <p className="post-heading">{props.Name}</p>
    <div className="card-footer">
      <div className="ratings ">
        <span>{props.rating.toPrecision(2)}</span>
      </div>
      <div>
        <img src={(props.likedData === true) ? redHeart : whiteHeart} alt="Heart" className="heart-logo" />
      </div>
    </div>
  </div>
);
export default BookCard;
