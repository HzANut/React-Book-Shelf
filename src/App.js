import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./Components/BookShelf";
import { Route } from "react-router-dom";
import BookSearch from "./Components/BookSearch";

class BooksApp extends React.Component {
  state = {
    /**
     * Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  };

  changeBookShelf = (book, shelfType) => {
    for (const b of this.state.books) {
      if (b.id === book.id) {
        BooksAPI.update(book, shelfType).then((response) => {
          book.shelf = shelfType;
          this.setState([...this.state.books]);
        });
        return;
      }
    }

    this.setState((currState) => ({
      books: [...currState.books, { ...book, shelf: shelfType }],
    }));
  };

  async componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books,
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              books={this.state.books}
              onShelfMove={this.changeBookShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <BookSearch
              shelfBooks={this.state.books}
              onShelfMove={this.changeBookShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
