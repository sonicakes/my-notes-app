import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import { useState, useEffect } from "react";

const App = () => {
 const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [];
  });

   useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };
//todo - unpin
    const togglePin = (id, newVal) => {

      setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id
          ? { ...note, isPinned: newVal } // Update match
          : note // Keep others the same
      )
    );
  };

  return (
    <>
      <NoteForm notes={notes} setNotes={setNotes} />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-5">My notes</h1>
        <NotesList
          notes={notes}
          deleteNote={deleteNote}
          togglePin={togglePin}
        />
      </div>
    </>
  );
};

export default App;
