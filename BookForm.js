// src/components/BookForm.js

import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { title, author, published_date: publishedDate, isbn };

    axios.post('http://localhost:8000/api/books/', newBook)
      .then(response => console.log('Book added:', response.data))
      .catch(error => console.error('Error adding book:', error));

    // Clear form fields
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setIsbn('');
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />

        <label>Published Date:</label>
        <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} required />

        <label>ISBN:</label>
        <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
