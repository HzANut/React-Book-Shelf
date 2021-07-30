# MyReads Project

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

# App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read
  Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.
The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page. When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

![MyRead](https://user-images.githubusercontent.com/25126842/127589769-5e951663-ab98-4093-a336-0594f0e3f637.gif)
