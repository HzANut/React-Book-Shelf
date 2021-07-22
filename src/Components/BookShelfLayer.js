import React from "react";
import Book from "./Book";

export default function BookShelfLayer(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books
            .filter((book) => book.shelf === props.shelfType)
            .map((book) => (
              <li key={book.id}>
                <Book book={book} onShelfMove={props.onShelfMove} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}
