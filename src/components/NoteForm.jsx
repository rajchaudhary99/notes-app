// src/components/NoteForm.js
import React, { useState } from 'react';
import { addNote, updateNote } from '../utils/storage';

const NoteForm = ({ noteToEdit, onSave, onCancel }) => {
  const [title, setTitle] = useState(noteToEdit?.title || '');
  const [content, setContent] = useState(noteToEdit?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const note = {
      id: noteToEdit?.id || Date.now(),
      title,
      content,
      date: new Date().toISOString(),
    };

    if (noteToEdit) {
      updateNote(note.id, note);
    } else {
      addNote(note);
    }

    onSave();
    setTitle('');
    setContent('');
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{noteToEdit ? 'Edit Note' : 'New Note'}</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Content"
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              {noteToEdit ? 'Update' : 'Save'}
            </button>
            {noteToEdit && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;