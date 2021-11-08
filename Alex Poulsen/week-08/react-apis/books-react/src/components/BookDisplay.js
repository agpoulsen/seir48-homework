import React, { Component } from 'react';

// class BookDisplay extends Component {
//
//   render(){
//     return (
//       <div>
//         <h1>{props.bookData.title}</h1>
//       </div>
//     );
//   }
// }

const BookDisplay = props => {
  return (
    <div>
      <h1>{props.bookData.title}</h1>
      <h3>{props.bookData.author}</h3>
      <img src={props.bookData.coverImage} alt={props.bookData.title}/>
      <h4>{props.bookData.rating}</h4>
    </div>
  )
}

export default BookDisplay;
