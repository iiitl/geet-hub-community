import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Footer from "./Footer";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    const id=uuidv4();
    console.log(contact);
    setContacts([...contacts, { id:id, ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      <Footer/>
    </div>

  );
}

export default App;
