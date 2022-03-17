import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [text, setText] = useState([]);
  function addNote(newNotes) {
    setText((prevNote) => {
      return [...prevNote, newNotes];
    });
  }

  function deleteNote(id) {
    setText((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {text.map((textItem, index) => {
        return (
          <Note
            onDelete={deleteNote}
            key={index}
            id={index}
            title={textItem.title}
            content={textItem.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
