import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import axios from "axios";


function App() {
    const [notes, setNotes] = useState([]);
    axios.get("/api/note/").then(r => {setNotes(r.data)})
    
    function addNote(newNote) {
        axios.post('/api/note/', {
            title: newNote.title,
            content: newNote.content,
        })}

    function deleteNote(note) {
        axios.delete(`/api/note/${note.id}/`)
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
            return <Note key={index} note={noteItem} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
        })}
        <Footer />
    </div>;
};

export default App;



