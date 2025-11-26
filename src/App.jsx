import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };
//todo - unpin
  //   const unpinNote = (id, newVal) => {

  //     setNotes(prevNotes =>
  //     prevNotes.map(note =>
  //       note.id === id
  //         ? { ...note, isPinned: newVal } // Update match
  //         : note // Keep others the same
  //     )
  //   );
  // };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">My notes</h1>
      <NoteForm notes={notes} setNotes={setNotes}/>
      <NotesList notes={notes} deleteNote={deleteNote}/>
    </div>
  );
};

export default App;
