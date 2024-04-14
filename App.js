import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/header";
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts,contact]);
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
