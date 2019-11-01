import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>{books.length} books</p>
    </div>
  );
}

export default Navbar;