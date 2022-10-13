import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Footer from "./Footer";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async(contact) => {
    const id=uuidv4();
    try{
      setContacts([...contacts, {id:id,...contact} ]);
      const msg=await axios.post('http://localhost:4000/addition',{
        id:id,
        title:contact.track,
        genre:contact.genre,
        author:contact.author,
        link:contact.link
      });
    }catch(err){
      console.log(err.message);
        alert('error');
    }  
  };

  const removeContactHandler = async(id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
    const deleting= await axios.put('http://localhost:4000/deletion',{
      id:id
    });
  };
  
  useEffect(() => { 
    setContacts([]);
    const contactobject=[];
    const fetching=async ()=>{
      const msg= await axios.get('http://localhost:4000/fetching');
      msg.data.all[0].contractlist.map((contract,i)=>{
          console.log(contract);
          contactobject.push(contract);
      })
      setContacts(contactobject);
    }
    console.log(contactobject);
    fetching();
  }, []);

  
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