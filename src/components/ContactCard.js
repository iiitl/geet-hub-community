import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, track, author, genre, link } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{track}</div>
        <div>Genre : {genre}</div>
        <div>
        Artist/Author Name : <a href={"mailto:" + author}>{author}</a>
        </div>
        <div>
          Link: <a href={link}> Click Here</a>
        </div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "1rem" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;