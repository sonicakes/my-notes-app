import Note from "./Note";

const NotesList = ({ notes, deleteNote, togglePin}) => {
  const sortedNotes = [...notes].sort((a, b) => {
    return b.isPinned - a.isPinned;
  });
 
  return (
    <>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {sortedNotes.map((note, ind) => (
          <Note key={ind} note={note} deleteNote={deleteNote} togglePin={togglePin}/>
        ))}
      </div>
    </>
  );
};

export default NotesList;
