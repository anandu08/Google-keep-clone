import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{
        props.delNote(props.id);
      }} className="del-btn"><i className="fa-sharp fa-solid fa-minus fa-2xl"></i></button>
    </div>
  );
}

export default Note;
