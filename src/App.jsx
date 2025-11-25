import NoteList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  return (
    <>
      <h1 className="text-3xl font-bold">My notes</h1>
      <NoteList notes={notes} />
      <NoteForm notes={notes} />
    </>
  );
};

export default App;
