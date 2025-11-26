import { useState } from "react";
import { LuPin } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { LuPinOff } from "react-icons/lu";

const Note = ({ note, deleteNote }) => {
  const [hover, setHover] = useState(false);
  return (
    //Tailwind cannot see classes that are constructed at runtime because it scans your code as plain text before the JavaScript runs.
    <div className={`rounded-lg ${note.color} p-4`}>
      <div className="flex justify-between">
        <h3 className="font-bold text-lg capitalize">{note.title}</h3>
        <div
          // onMouseEnter={() => setHover(true)}
          // onMouseLeave={() => setHover(false)}
          // onClick={() => unpinNote(note.id, false)}
        >
            {/* <LuPinOff className="cursor-pointer" size={20} fill="black" /> */}
                  {note.isPinned ? (

            <LuPin className="cursor-pointer" size={20} fill="black" />
                  ) : ('') }
        </div>
      </div>
      <p>Category: {note.category}</p>
      <p>Priority: {note.priority}</p>
      <p>{note.description}</p>
      <div className="flex justify-end" onClick={() => deleteNote(note.id)}>
        <LuTrash2 size={20} className="cursor-pointer hover:fill-gray-500" />
      </div>
    </div>
  );
};

export default Note;
