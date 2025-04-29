// src/components/NoteList.js
import React, { useState } from 'react';
import { getNotes } from '../utils/storage';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';

const NoteList = () => {
  const [noteToEdit, setNoteToEdit] = useState(null);
  const notes = getNotes();

  const handleEdit = (note) => {
    setNoteToEdit(note);
  };

  const handleSave = () => {
    setNoteToEdit(null);
    window.location.reload(); // Refresh to show updated list
  };

  const handleCancel = () => {
    setNoteToEdit(null);
  };

  return (
    <div>
      <NoteForm
        noteToEdit={noteToEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      {notes.length === 0 ? (
        <div className="alert alert-info">No notes yet. Add your first note!</div>
      ) : (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} onEdit={handleEdit} />
        ))
      )}
    </div>
  );
};

export default NoteList;