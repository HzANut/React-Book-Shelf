import React from "react";
import { Link } from "react-router-dom";
import BookShelfLayer from "./BookShelfLayer";

export default function BookShelf(props) {
  // const filteredBooks = (shelfType) => {
  //   props.books.filter((book) => book.shelf === shelfType);
  // };
  return (
    // {this.state.showSearchPage ? (
    <div>
      {/* ) : ( */}
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelfLayer
              title="Currently Reading"
              shelfType="currentlyReading"
              books={props.books}
              onShelfMove={props.onShelfMove}
            />
            <BookShelfLayer
              title="Want to Read"
              shelfType="wantToRead"
              books={props.books}
              onShelfMove={props.onShelfMove}
            />
            <BookShelfLayer
              title="Read"
              shelfType="read"
              books={props.books}
              onShelfMove={props.onShelfMove}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button className="open-search-button">Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
