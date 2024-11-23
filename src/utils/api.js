const API_BASE_URL = 'https://personal-notes-manager-server.onrender.com/api';

export const getNotes = async (searchTerm = '', category = 'All') => {
  try {
    const queryParams = new URLSearchParams();
    if (searchTerm) queryParams.append('search', searchTerm);
    if (category !== 'All') queryParams.append('category', category);
    
    const response = await fetch(`${API_BASE_URL}/notes?${queryParams}`);
    if (!response.ok) throw new Error('Failed to fetch notes');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createNote = async (noteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    });
    if (!response.ok) throw new Error('Failed to create note');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateNote = async (id, noteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    });
    if (!response.ok) throw new Error('Failed to update note');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete note');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};