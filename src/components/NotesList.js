import React from 'react';
import "./styles.css"

const NotesList = ({ notes, onEditNote, onDeleteNote }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map(note => (
        <div
          key={note._id}
          className={`p-4 rounded-lg shadow ${
            note.isCompleted ? 'bg-green-50' : 'bg-white'
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{note.title}</h3>
            <span className="text-sm px-2 py-1 bg-gray-100 rounded">
              {note.category}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">{note.description}</p>
          
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>
              Created: {new Date(note.created_at).toLocaleDateString()}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => onEditNote(note)}
                className="text-blue-500 hover:text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteNote(note._id)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;