import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import GroupOfBooks from './components/GroupOfBooks/GroupOfBooks';
import getData from './UtilityFunction/getData';

class App extends Component {
  state = {
    bookData: {},
    writers: [],
    refresh: true,
  }

  componentDidMount() {
    getData('http://localhost:8080/books').then((response) => {
      this.storeData(response.data);
      this.extractWriters(response.data);
    });
  }

  storeData = responseObject => this.setState({ bookData: responseObject });

  extractWriters = bookData => this.setState({ writers: Object.keys(bookData) });

  refreshPage = () => {
    const { refresh } = this.state;
    this.setState({ refresh: !refresh });
  };

  render() {
    const booksOfSameAuthor = this.state.writers.map((writer) => {
      const { refresh } = this.state;
      return (<GroupOfBooks author={writer} refreshValue={refresh} key={writer} listOfBooks={this.state.bookData[writer]} />);
    });
    return (
      <div>
        <Header onClickFunction={this.refreshPage} />
        {booksOfSameAuthor}
      </div>
    );
  }
}

export default App;
