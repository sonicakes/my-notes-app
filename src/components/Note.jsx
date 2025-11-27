import { useState } from "react";
import { LuPin } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { LuPinOff } from "react-icons/lu";

const Note = ({ note, deleteNote, togglePin }) => {
  const [hover, setHover] = useState(false);

  const baseClasses = `
              cursor-pointer 
              transition-colors
               ${
                 note.isPinned
                   ? "" 
                   : "hover:fill-gray-500 hover:text-gray-500" 
               } 
              ${
                note.isPinned
                  ? "text-gray-900 fill-gray-900" 
                  : "text-gray-500 fill-transparent" 
              }
            `;

  return (
    //Tailwind cannot see classes that are constructed at runtime because it scans your code as plain text before the JavaScript runs.
    <div className={`p-4 rounded-lg ${note.color}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h3 className="font-bold leading-5 text-lg lg:text-xl capitalize">
            {note.title}
          </h3>
        </div>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => togglePin(note.id, (note.isPinned = !note.isPinned))}
          className="self-start"
          >
          {hover && note.isPinned ? (
            <LuPinOff className={`${baseClasses} `} size={20} />
          ) : (
            <LuPin className={`${baseClasses} `} size={20} />
          )}
        </div>
      </div>

      <div className="flex items-center pt-2">
        <div
          className={`rounded-full h-4 w-4  ${
            note.priority === "Low"
              ? "bg-green-500"
              : note.priority === "Medium"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        ></div>
        <div className="border-lg ml-1 px-2 py-0.5 text-gray-900 bg-gray-200 font-semibold rounded-lg text-xs inline">
          {note.category}
        </div>
      </div>

      <p className="pt-2 text-sm md:text-base">{note.description}</p>

      <div className="flex justify-end">
        <LuTrash2
          size={20}
          className="cursor-pointer text-gray-500 hover:fill-gray-500 self-end"
          onClick={() => deleteNote(note.id)}
        />
      </div>
    </div>
  );
};

export default Note;
