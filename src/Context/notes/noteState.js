import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "https://cloud-notes-backend-poou.vercel.app";
  const notesinitial = [];

  const [notes, setnotes] = useState(notesinitial);

  // Fetch all notes
  const getnotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken : localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setnotes(json);
  };

  // Add a new note
  const addnotes = async (title, description) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken : localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    setnotes(notes.concat(json));
  };

  // Delete a note
  const deletenotes = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken : localStorage.getItem('token'),
      },
  
    });
   
    setnotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    console.log("Note deleted:", id);
  };

  // Update a note
  const editnotes = async (id, title, description) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authtoken : localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    setnotes(
      notes.map((note) =>
        note._id === id ? { ...note, title: json.title, description: json.description } : note
      )
    );
  };

  return (
    <noteContext.Provider value={{ notes, getnotes, addnotes, deletenotes, editnotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
