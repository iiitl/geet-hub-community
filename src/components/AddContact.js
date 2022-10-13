import React from "react";
import { useState } from "react";

const AddContact = (props) => {
  const [state,setState]=useState({
    track: "",
    genre: "",
    author: "",
    link: "https://",
  });
  const fun=(e)=>{
    e.preventDefault();
    if (state.track === "") {
        alert("Name is mandatory!");
        return;
    }
    if (state.genre === "") {
        alert("genre is mandatory!");
        return;
    }
    if (state.author === "") {
        alert("Contact Number is mandatory!");
        return;
    }
    props.addContactHandler(state);
    console.log(state);
    setState({ track: "", genre: "", author: "", link: "https://" });
  }
  
  return(
    <div className="ui main">
         <h2>Publish Audio</h2>
         <form className="ui form" >
           <div className="field">
             <label>Track Title</label>
             <input
              type="text"
              name="name"
              placeholder="Track Title"
              value={state.track}
              onChange={(e) => setState({ ...state,track: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Genre</label>
            <input
              type="text"
              name="author"
              placeholder="Genre"
              value={state.author}
              onChange={(e) => setState({  ...state,author: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Artist/Author Name</label>
            <input
              type="text"
              name="genre"
              placeholder="Artist/Author Name"
              value={state.genre}
              onChange={(e) => setState({ ...state, genre: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Link</label>
            <input
              type="text"
              name="link"
              placeholder="Link"
              value={state.link}
              onChange={(e) => setState({  ...state,link: e.target.value })}
            />
          </div>
          <button className="ui button blue" onClick={(e)=>{
            fun(e);
          }}>Add</button>
        </form>
      </div>
  )
};


 export default AddContact;
