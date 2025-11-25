const Note = ({note}) => {
  return (
    //Tailwind cannot see classes that are constructed at runtime because it scans your code as plain text before the JavaScript runs.
    <div className={`rounded-lg ${note.color} p-2`}>
      <h3 className="font-bold text-lg">{note.title}</h3>
      <p>{note.isPinned ? 'pinned' : 'not pinned'}</p>
      <p>Category: {note.category}</p>
      <p>Priority: {note.priority}</p>
      <p>{note.description}</p>
      <p>Color: {note.color}</p>
    </div>
  );
};

export default Note;
