import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Fab from '@mui/material/Fab';
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={()=>{
        props.delNote(props.id);
      }}><RemoveCircleOutlineIcon/></Fab>
    </div>
  );
}

export default Note;
