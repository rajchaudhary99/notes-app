// src/App.js
import React from 'react';
import NoteList from './components/NoteList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">React Notes App</h1>
      <NoteList />
    </div>
  );
}

export default App;