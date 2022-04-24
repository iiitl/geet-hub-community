import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    contactnumber: "",
    link: "https://",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      alert("Name is mandatory!");
      return;
    }
    if (this.state.email === "") {
      alert("Email is mandatory!");
      return;
    }
    if (this.state.contactnumber === "") {
      alert("Contact Number is mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", contactnumber: "", link: "https://" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Publish Audio</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Track Title</label>
            <input
              type="text"
              name="name"
              placeholder="Track Title"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Genre</label>
            <input
              type="text"
              name="contactnumber"
              placeholder="Genre"
              value={this.state.contactnumber}
              onChange={(e) => this.setState({ contactnumber: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Artist/Author Name</label>
            <input
              type="text"
              name="email"
              placeholder="Artist/Author Name"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Link</label>
            <input
              type="text"
              name="link"
              placeholder="Link"
              value={this.state.link}
              onChange={(e) => this.setState({ link: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
