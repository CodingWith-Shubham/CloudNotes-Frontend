import React, { useContext, useEffect, useState } from "react";
import noteContext from "../Context/notes/noteContext";
import NoteItem from "./NoteItem";
import {useNavigate} from 'react-router-dom'

export default function Notes() {
  const context = useContext(noteContext);
  let navigate = useNavigate()
  const { notes, addnotes,getnotes,deletenotes} = context;
  useEffect(()=>{
    if (localStorage.getItem('token')) {
      getnotes()
    } else {
      navigate('/login')
    }
  })
  
  const [note, setNote] = useState({ title: "", description: "" });

  const handleSubmitButton = () => {
    addnotes(note.title, note.description);  // Add the note using addnotes function from context
    setNote({ title: "", description: "" });  // Clear the input fields after submitting
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });  // Update the note state as the user types
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
      <h1 className='text-black ml-36 mb-5 font-semibold text-2xl'>Welcome</h1>

        <div className="bg-white shadow-lg rounded-lg p-5 space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Create a New Note</h2>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter note title"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              value={note.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter note description"
              rows="5"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              value={note.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-teal-500 text-white px-4 py-2 mr-24 rounded-md hover:bg-teal-600 transition"
              onClick={handleSubmitButton}
            >
              Save Note
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-5 space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Your Notes</h2>
          <div>
          {notes.length > 0 ? (
  notes.map((note) => {
    console.log("Rendering note:", note);  // Log to verify the note object
    return (
      <NoteItem
        key={note._id}  // Ensure a unique key for React rendering
        note={note}      // Pass the entire note object
        onDeleteClick = {()=> deletenotes(note._id)}
      />
    );
  })
) : (
  <p className="text-gray-600">No notes available.</p>
)}

          </div>
        </div>
      </div>
    </>
  );
}
