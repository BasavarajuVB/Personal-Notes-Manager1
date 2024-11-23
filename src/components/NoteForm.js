import React, { useState, useEffect } from 'react';
import "./styles.css"


const CATEGORIES = [
  'Work', 'Personal', 'Study', 'Shopping', 'Health',
  'Finance', 'Travel', 'Projects', 'Goals', 'Ideas',
  'Reminders', 'Meetings', 'Events', 'Books', 'Movies',
  'Music', 'Recipes', 'Quotes', 'Journal', 'Others'
];

const NoteForm = ({ note, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Others',
    isCompleted: false
  });

  useEffect(() => {
    if (note) {
      setFormData(note);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded h-32"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full p-2 border rounded"
        >
          {CATEGORIES.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          checked={formData.isCompleted}
          onChange={(e) => setFormData({ ...formData, isCompleted: e.target.checked })}
          className="mr-2"
        />
        <label className="text-sm">Mark as Completed</label>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {note ? 'Update Note' : 'Add Note'}
        </button>
      </div>
    </form>
  );
};

export default NoteForm;