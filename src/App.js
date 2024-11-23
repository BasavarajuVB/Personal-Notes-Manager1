// // import React, { useState, useEffect } from 'react';
// // import { ToastContainer, toast } from 'react-toastify';
// // import Navbar from './components/Navbar';
// // import NotesList from './components/NotesList';
// // import NoteForm from './components/NoteForm';
// // import SearchBar from './components/SearchBar';
// // import Modal from './components/Modal';
// // import { getNotes, createNote, updateNote, deleteNote } from './utils/api';
// // import 'react-toastify/dist/ReactToastify.css';
// // import './App.css';

// // function App() {
// //   const [notes, setNotes] = useState([]);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [editingNote, setEditingNote] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [currentCategory, setCurrentCategory] = useState('All');

// //   useEffect(() => {
// //     fetchNotes();
// //   }, [searchTerm, currentCategory]);

// //   const fetchNotes = async () => {
// //     try {
// //       const data = await getNotes(searchTerm, currentCategory);
// //       setNotes(data);
// //     } catch (error) {
// //       toast.error('Error fetching notes');
// //     }
// //   };

// //   const handleAddNote = async (noteData) => {
// //     try {
// //       await createNote(noteData);
// //       fetchNotes();
// //       toast.success('Note added successfully!');
// //       setIsModalOpen(false);
// //     } catch (error) {
// //       toast.error('Error adding note');
// //     }
// //   };

// //   const handleUpdateNote = async (noteData) => {
// //     try {
// //       await updateNote(noteData._id, noteData);
// //       fetchNotes();
// //       toast.success('Note updated successfully!');
// //       setIsModalOpen(false);
// //       setEditingNote(null);
// //     } catch (error) {
// //       toast.error('Error updating note');
// //     }
// //   };

// //   const handleDeleteNote = async (noteId) => {
// //     try {
// //       await deleteNote(noteId);
// //       fetchNotes();
// //       toast.success('Note deleted successfully!');
// //     } catch (error) {
// //       toast.error('Error deleting note');
// //     }
// //   };

// //   return (
// //     <div className="app">
// //       <Navbar />
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="flex justify-between items-center mb-6">
// //           <SearchBar
// //             searchTerm={searchTerm}
// //             setSearchTerm={setSearchTerm}
// //             currentCategory={currentCategory}
// //             setCurrentCategory={setCurrentCategory}
// //           />
// //           <button
// //             onClick={() => setIsModalOpen(true)}
// //             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
// //           >
// //             Add Note
// //           </button>
// //         </div>

// //         <NotesList
// //           notes={notes}
// //           onEditNote={(note) => {
// //             setEditingNote(note);
// //             setIsModalOpen(true);
// //           }}
// //           onDeleteNote={handleDeleteNote}
// //         />

// //         <Modal isOpen={isModalOpen} onClose={() => {
// //           setIsModalOpen(false);
// //           setEditingNote(null);
// //         }}>
// //           <NoteForm
// //             note={editingNote}
// //             onSubmit={editingNote ? handleUpdateNote : handleAddNote}
// //             onClose={() => {
// //               setIsModalOpen(false);
// //               setEditingNote(null);
// //             }}
// //           />
// //         </Modal>

// //         <ToastContainer />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// // App.js
// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import SearchBar from './components/SearchBar';
// import NotesList from './components/NotesList';
// import NoteForm from './components/NoteForm';
// import Modal from './components/Modal';
// import './components/styles.css';

// const App = () => {
//   const [notes, setNotes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentCategory, setCurrentCategory] = useState('All');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentNote, setCurrentNote] = useState(null);

//   // Load notes from localStorage on initial render
//   useEffect(() => {
//     const savedNotes = localStorage.getItem('notes');
//     if (savedNotes) {
//       setNotes(JSON.parse(savedNotes));
//     }
//   }, []);

//   // Save notes to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('notes', JSON.stringify(notes));
//   }, [notes]);

//   const handleSubmit = (noteData) => {
//     if (currentNote) {
//       // Update existing note
//       setNotes(notes.map(note => 
//         note._id === currentNote._id ? { ...noteData, _id: note._id } : note
//       ));
//     } else {
//       // Add new note
//       setNotes([
//         ...notes,
//         {
//           ...noteData,
//           _id: Date.now().toString(),
//           created_at: new Date().toISOString()
//         }
//       ]);
//     }
//     setIsModalOpen(false);
//     setCurrentNote(null);
//   };

//   const handleEditNote = (note) => {
//     setCurrentNote(note);
//     setIsModalOpen(true);
//   };

//   const handleDeleteNote = (noteId) => {
//     setNotes(notes.filter(note => note._id !== noteId));
//   };

//   const filteredNotes = notes.filter(note => {
//     const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          note.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = currentCategory === 'All' || note.category === currentCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <main className="container mx-auto px-4 py-8">
//         <div className="flex justify-between items-center mb-8">
//           <SearchBar
//             searchTerm={searchTerm}
//             setSearchTerm={setSearchTerm}
//             currentCategory={currentCategory}
//             setCurrentCategory={setCurrentCategory}
//           />
          
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="btn btn-primary px-4 py-2 rounded"
//           >
//             Add New Note
//           </button>
//         </div>

//         <NotesList
//           notes={filteredNotes}
//           onEditNote={handleEditNote}
//           onDeleteNote={handleDeleteNote}
//         />

//         <Modal isOpen={isModalOpen} onClose={() => {
//           setIsModalOpen(false);
//           setCurrentNote(null);
//         }}>
//           <NoteForm
//             note={currentNote}
//             onSubmit={handleSubmit}
//             onClose={() => {
//               setIsModalOpen(false);
//               setCurrentNote(null);
//             }}
//           />
//         </Modal>
//       </main>
//     </div>
//   );
// };

// export default App;
// client/src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import Modal from './components/Modal';
import { api } from './services/api';
import './components/styles.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCategory, setCurrentCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const fetchedNotes = await api.getNotes(
        currentCategory === 'All' ? '' : currentCategory,
        searchTerm
      );
      setNotes(fetchedNotes);
      setError(null);
    } catch (err) {
      setError('Failed to fetch notes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [searchTerm, currentCategory]);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      if (editingNote) {
        await api.updateNote(editingNote._id, formData);
      } else {
        await api.createNote(formData);
      }
      setIsModalOpen(false);
      setEditingNote(null);
      fetchNotes();
    } catch (err) {
      setError('Failed to save note');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleDeleteNote = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;
    
    try {
      setLoading(true);
      await api.deleteNote(id);
      fetchNotes();
    } catch (err) {
      setError('Failed to delete note');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="add-note-btn"
          >
            Add Note
          </button>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <NotesList
            notes={notes}
            onEditNote={handleEditNote}
            onDeleteNote={handleDeleteNote}
          />
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingNote(null);
          }}
        >
          <NoteForm
            note={editingNote}
            onSubmit={handleSubmit}
            onClose={() => {
              setIsModalOpen(false);
              setEditingNote(null);
            }}
          />
        </Modal>
      </main>
    </div>
  );
}

export default App;