// src/utils/storage.js
const STORAGE_KEY = 'react-notes-app';

export const getNotes = () => {
  const notes = localStorage.getItem(STORAGE_KEY);
  return notes ? JSON.parse(notes) : [];
};

export const saveNotes = (notes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

export const addNote = (note) => {
  const notes = getNotes();
  notes.unshift(note); // Add new note at beginning
  saveNotes(notes);
};

export const updateNote = (id, updatedNote) => {
  const notes = getNotes();
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes[index] = updatedNote;
    saveNotes(notes);
  }
};

export const deleteNote = (id) => {
  const notes = getNotes().filter(note => note.id !== id);
  saveNotes(notes);
};