import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
const [expanded,setExpanded]=useState(false);
function expand(){
  setExpanded(true);
}
  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(note.title!=""&&note.content!="")
    props.onAddItem(note);
 setNote({title:"",content:""});
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {expanded&&<input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}
        <textarea
        onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={expanded?"3":"1"}
          value={note.content}
        />       <Zoom in={expanded} 
                      style={{ transitionDelay: expanded ?
                          '100ms' : '0ms' }}>
                            <Fab type="submit"><AddIcon color={"secondary"}/></Fab>
                </Zoom>


      </form>
    </div>
  );
}

export default CreateArea;
