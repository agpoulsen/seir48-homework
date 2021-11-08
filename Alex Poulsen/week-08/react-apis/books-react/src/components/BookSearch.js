import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm.js';
import BookDisplay from './BookDisplay.js'

class BookSearch extends Component {
  constructor() {
    super();
    this.state = {
      bookData: {}
    };
    this.fetchBookData = this.fetchBookData.bind(this);
  }

  fetchBookData(query) {
    const bookURL = 'https://www.googleapis.com/books/v1/volumes?q=' + query;
    axios(bookURL).then((response) => {
      let bookData = {
        title: response.data.items[0].volumeInfo.title,
        author: response.data.items[0].volumeInfo.authors[0],
        coverImage: response.data.items[0].volumeInfo.imageLinks.thumbnail,
        rating: response.data.items[0].volumeInfo.averageRating,
      };
      this.setState({bookData: bookData})
    })
  }

  render() {
    return (
      <div>
        <h1>Google Books Search</h1>

        <SearchForm onSubmit={ this.fetchBookData }/>
        <BookDisplay bookData={ this.state.bookData }/>
      </div>
    );
  }
}

export default BookSearch;
