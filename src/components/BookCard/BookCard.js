import React, { Component } from 'react';
import './BookCard.css';

const axios = require('axios');
const whiteHeart = require('./../../Assets/heart-black.svg');
const redHeart = require('./../../Assets/heart-red.svg');
const imagePath = require('./../../Assets/cover_image.jpeg');

class BookCard extends Component {
  state = {
    likedDataInState: this.props.likedData,
  }

  toggleColor = () => {
    const { likedDataInState } = this.state;
    if (likedDataInState) {
      axios({
        url: `http://localhost:8080/likeOrDislike/${this.props.bookId}/dislike`,
        method: 'PUT',
      });
    } else {
      axios({
        url: `http://localhost:8080/likeOrDislike/${this.props.bookId}/like`,
        method: 'PUT',
      });
    }
    this.setState({ likedDataInState: !likedDataInState });
  }

  render() {
    const { likedDataInState } = this.state;
    const { Name, rating } = this.props;
    return (
      <div className="card">
        <img src={imagePath} alt="Book" className="blog-image" />
        <p className="post-heading">{Name}</p>
        <div className="card-footer">
          <div className="ratings ">
            <span>{rating.toPrecision(2)}</span>
          </div>
          <div>
            <img src={(likedDataInState === true) ? redHeart : whiteHeart} alt="Heart" className="heart-logo" onClick={this.toggleColor} />
          </div>
        </div>
      </div>
    );
  }
}
export default BookCard;
