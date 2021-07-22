import React from "react";
import BookShelfLayer from "./BookShelfLayer";

export default function BookShelf(props) {
  // const filteredBooks = (shelfType) => {
  //   props.books.filter((book) => book.shelf === shelfType);
  // };
  return (
    // {this.state.showSearchPage ? (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            // onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
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
            />
            <BookShelfLayer
              title="Want to Read"
              shelfType="wantToRead"
              books={props.books}
            />
            <BookShelfLayer title="Read" shelfType="read" books={props.books} />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    </div>

    //   ) }
  );
}
