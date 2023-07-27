import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,addNote]=useState([]);
  function addItem(note){
  
addNote((prev)=>{return [...prev,note]})
  
  }
  function delNote(id){
  
addNote(()=>{
  return notes.filter((note,index)=>{return index!=id});
});

  }
  return (
    <div>
      <Header />
      <CreateArea key={1} onAddItem={addItem} />
  {notes.map((note,index)=>{
    return <Note id={index} key={index} title={note.title} content={note.content} delNote={delNote} />
  })}
      <Footer />
    </div>
  );
}

export default App;
