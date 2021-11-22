// # Books I
//
// ## Specification
//
// Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.
//
// ## Sample HTTParty URL
//
// https://www.googleapis.com/books/v1/volumes?q=title:Ulysses

const getBookCover = function (event) {
  event.preventDefault(); // stay on this page: don't try to send the form data back to the server

  bookTitle = document.getElementById('title-search').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`);
  xhr.send();

  xhr.onreadystatechange = function (){
    if ( xhr.readyState !==4 ) return;

    const bookData = JSON.parse( xhr.responseText );
    bookCover = bookData.items[0].volumeInfo.imageLinks.thumbnail;
    document.getElementById('cover').setAttribute('src', bookCover)
  };
}

document.querySelector('form').addEventListener('submit', getBookCover);
