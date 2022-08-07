import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import {Fab} from '@material-ui/core/'
import {Zoom} from '@material-ui/core/'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  const [rows, setRows]=useState(1)
  const [inputType, setInputType]=useState("hidden")
  function expandNote(){
    setRows(3)
    setInputType("text")
  }
  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          type={inputType}
        />
        <textarea
        onClick={expandNote}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={rows}
        />
        <Zoom in="true">
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
