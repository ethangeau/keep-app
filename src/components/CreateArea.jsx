import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    return <div><form>
    <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
    <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." />
    <button onClick={submitNote}><AddCircleIcon/></button>
    </form>
    </div>

}

export default CreateArea;