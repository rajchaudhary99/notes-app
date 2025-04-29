// src/components/NoteItem.js
import React from 'react';
import { deleteNote } from '../utils/storage';

const NoteItem = ({ note, onEdit }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteNote(note.id);
      window.location.reload(); // Simple way to refresh the list
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <p className="card-text">
          <small className="text-muted">
            {new Date(note.date).toLocaleString()}
          </small>
        </p>
        <div className="d-flex justify-content-end">
          <button
            onClick={() => onEdit(note)}
            className="btn btn-sm btn-outline-primary me-2"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-sm btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;