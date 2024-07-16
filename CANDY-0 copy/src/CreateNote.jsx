import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function CreateNote(props) {


  const [expand,setExpand] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const addEvent = () => { 
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
const expandIt =()=>{
  setExpand(true);
}
  return (
    <div className="main_note">
      <form onSubmit={addEvent}>

        {expand?
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={InputEvent}
          placeholder="Title"
          autoComplete="off"
        />:null}

        <textarea
          name="content"
          value={note.content}
          onChange={InputEvent}
          placeholder="Write a note"
          onClick={expandIt}
        />
        <Button type="submit">
          <AddIcon className="plus_sign" />
        </Button>
      </form>
    </div>
  );
}

export default CreateNote;
