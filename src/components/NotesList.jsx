import Note from "./Note";

const NotesList = ({ notes }) => {
  return (
    <>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {notes.map((note, ind) => (
          <Note key={ind} note={note} />
        ))}
      </div>
    </>
  );
};

export default NotesList;
