import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">My notes</h1>
      <NoteForm notes={notes} setNotes={setNotes}/>
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
