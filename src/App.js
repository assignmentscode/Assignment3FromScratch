import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import GroupOfBooks from './components/GroupOfBooks/GroupOfBooks';
import getData from './UtilityFunction/getData';

class App extends Component {
  state = {
    bookData: {},
    writers: [],
  }

  componentDidMount() {
    getData('http://localhost:8080/books').then((response) => {
      this.storeData(response.data);
      this.extractWriters(response.data);
    });
  }

  storeData = responseObject => this.setState({ bookData: responseObject });

  extractWriters = bookData => this.setState({ writers: Object.keys(bookData) });

  render() {
    const booksOfSameAuthor = this.state.writers.map(writer => (<GroupOfBooks author={writer} key={writer} listOfBooks={this.state.bookData[writer]} />));
    return (
      <div>
        <Header />
        {booksOfSameAuthor}
      </div>
    );
  }
}

export default App;
