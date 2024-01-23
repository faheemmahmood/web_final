// src/App.js

import React from 'react';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import BookForm from './components/BookForm';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="container">
      <BookList />
      <BookDetails book={{ title: 'Sample Book', author: 'Sample Author', published_date: '2022-01-01', isbn: '1234567890123' }} />
      <BookForm />
    </div>
  );
}

export default App;
