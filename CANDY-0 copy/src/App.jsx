// src/App.js
import React, { useState } from 'react';
import Accordion from './Accordion';
import './App.css';
import Questions from './Api';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note'; 

const App = () => {
  const [addItem, setAddItem] = useState([]);





  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, index) => index !== id)
    );
  };
  
  return (
    <div className="App">
      <Header/>
      <h1>Accordion Example</h1>
      <Accordion items={Questions} />
      <CreateNote passNote={addNote} />
      {addItem.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={onDelete}
        />
      ))}
      <Footer/>
    </div>
  );
};

export default App;

