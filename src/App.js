import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import BookCard from './components/BookCard/BookCard';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header />
        <div className="book-cards content-width">
          <BookCard Name="Harry" rating="4.2" likedData />
          <BookCard Name="Harry" rating="4.2" likedData />
          <BookCard Name="Harry" rating="4.2" likedData />
        </div>
      </div>
    );
  }
}

export default App;
