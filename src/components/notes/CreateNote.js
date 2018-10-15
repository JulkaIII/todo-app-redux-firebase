import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../store/actions/noteActions";

class CreateNote extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handeSubmit = e => {
    e.preventDefault(); // prevents the page for reloading
    //console.log(this.state);
    this.props.createNote(this.state); // from here goes to mapDispatchToProps
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handeSubmit}>
          <h5 className="grey-text text-darken-3">Create new note</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Note Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => dispatch(createNote(note))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateNote); // null - mapStateToProps
