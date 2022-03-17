import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({ title: "", content: "" });

  function handleChange(event) {
    const value = event.target.value;
    setNotes({ ...notes, [event.target.name]: value });
  }

  function handleSubmit(event) {
    props.onAdd(notes);
    setNotes({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          value={notes.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={notes.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
