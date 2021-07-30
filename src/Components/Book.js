// import React from "react";

import React, { Component } from "react";

export default class Book extends Component {
  handleChanges = (e) => {
    this.props.onShelfMove(this.props.book, e.target.value);
    console.log("in book component", this.props.book.title, e.target.value);
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
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              defaultValue={
                this.props.book.shelf ? this.props.book.shelf : "none"
              }
              onChange={this.handleChanges}
            >
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
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}
