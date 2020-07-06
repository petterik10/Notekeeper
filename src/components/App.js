import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputsAreas from "./InputsAreas";


function App() {

  const [notesArray, setNotesArray] = useState([]);

  const receiveNewNote = (newnote) => {
    setNotesArray(prevNotes => {
      return [...prevNotes, newnote]
    })
  }

  const removenote = (id) => {
    setNotesArray(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <InputsAreas
        onSubmit={receiveNewNote}
      />
      {notesArray.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            time={noteItem.currentTime}
            content={noteItem.content}
            onDelete={removenote}

          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
