// import React from "react";

import React, { Component } from "react";

export default class Book extends Component {
  handleChanges = (e) => {
    this.props.onShelfMove(this.props.book, e.target.value);
  };
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                this.props.book.imageLinks.smallThumbnail
              })`,
              // 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
            }}
          />
          <div className="book-shelf-changer">
            <select value={this.props.book.shelf} onChange={this.handleChanges}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    );
  }
}

// export default function Book(props) {
//   const change = () => {

//   }
//   return (

//   );
// }
