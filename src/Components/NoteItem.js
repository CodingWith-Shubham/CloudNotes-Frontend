import React from "react";

export default function NoteItem({ note, onDeleteClick }) {
  

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h3 className="text-lg font-bold text-gray-800">{note.title}</h3>
      <p className="text-gray-600 mt-2 mb-5">{note.description}</p>
      <div className="space-x-5">
        <i
          className="fa-solid fa-trash"
          onClick={onDeleteClick} // Use the passed onDeleteClick function
        ></i>
        
      </div>
    </div>
  );
}
