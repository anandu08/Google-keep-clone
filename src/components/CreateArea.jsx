import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

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
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit"><i className="fa-sharp fa-solid fa-plus fa-xl"></i></button>
      </form>
    </div>
  );
}

export default CreateArea;
