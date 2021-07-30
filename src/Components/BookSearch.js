import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

function BookSearch(props) {
  const { books } = { props };
  const [newBooks, setNewBooks] = useState([]);
  const [query, setQuery] = useState("");
  const updateQuery = (query) => setQuery(query.trim());

  const clearQuery = () => setQuery("");

  const searchBooks = useCallback(async (query) => {
    await BooksAPI.search(query).then((searchedBooks) => {
      if (searchedBooks.error) {
        console.log("erorr handling here");
        clearQuery();
      } else {
        console.log("update query books here");
        console.log(searchedBooks);
        setNewBooks(searchedBooks);
      }
    });
  }, []);

  useEffect(
    () => {
      if (query) {
        searchBooks(query);
      }
    },
    [books, searchBooks, query]
  );

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" onClick={() => clearQuery()}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {newBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} onShelfMove={props.onShelfMove} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BookSearch;
