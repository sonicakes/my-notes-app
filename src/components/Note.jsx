import { useState } from "react";
import { LuPin } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { LuPinOff } from "react-icons/lu";

const Note = ({ note, deleteNote }) => {
  const [hover, setHover] = useState(false);

  const baseClasses= `
              cursor-pointer 
              transition-colors
               ${note.isPinned 
                ? ''         // Pinned: Black outline, Black fill
                : 'hover:fill-gray-500 hover:text-gray-500' // Unpinned: Grey outline, No fill
              } 
              ${note.isPinned 
                ? 'text-gray-900 fill-gray-900'         // Pinned: Black outline, Black fill
                : 'text-gray-500 fill-transparent' // Unpinned: Grey outline, No fill
              }
            `;


  return (
    //Tailwind cannot see classes that are constructed at runtime because it scans your code as plain text before the JavaScript runs.
    <div className={`rounded-lg ${note.color} p-4`}>
      <div className="flex justify-between">
        <h3 className="font-bold text-lg capitalize">{note.title}</h3>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          //onClick={() => unpinNote(note.id, !note.isPinned)}
        >
      {/* Conditionally render the icon based on isHovered */}
      {hover && note.isPinned ? (
        
        // Pin is Pinned (Action: Unpin) -> Show the PinOff icon in a visible hover color
        <LuPinOff 
          className={`${baseClasses} `} 
          size={20} 
        />
      ) : (
        
        // Default state (or if Unpinned) -> Show the normal Pin icon
        <LuPin 
          className={`${baseClasses} `} 
          size={20} 
        />
      )}
        </div>
      </div>
      <p>Category: {note.category}</p>
      <p>Priority: {note.priority}</p>
      <p>{note.description}</p>
      <div className="flex justify-end" onClick={() => deleteNote(note.id)}>
        <LuTrash2 size={20} className="cursor-pointer text-gray-500 hover:fill-gray-500" />
      </div>
    </div>
  );
};

export default Note;
