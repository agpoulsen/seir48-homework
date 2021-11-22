const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

// Basic Set-up
const server = express();
const PORT = 1337;
server.set('view-engine', ejs);

server.get('/', (req, res) => {
  res.render('home.ejs')
});

server.get('/book', (req, res) => {
  axios(`https://www.googleapis.com/books/v1/volumes?q=${ req.query.book }`)
    .then(result => {
    res.render('book.ejs', {
      title: result.data.items[0].volumeInfo.title,
      author: result.data.items[0].volumeInfo.authors[0],
      img: result.data.items[0].volumeInfo.imageLinks.thumbnail
    });
  });
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }`);
});

//res.render('book.ejs', {title: req.query.book});
