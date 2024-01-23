// src/components/BookDetails.js

import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Published Date: {book.published_date}</p>
      <p>ISBN: {book.isbn}</p>
    </div>
  );
};

export default BookDetails;
