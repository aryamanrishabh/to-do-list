import React from "react";
import { connect } from "react-redux";
import { createReminder } from "../actions/reminderActions";
import { createTodo } from "../actions/todoActions";
import { createNote } from "../actions/noteActions";
import { selectElement } from "../actions/selectElement";

class Output extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      status: "",
      due: "",
    };
  }

  render() {
    console.log(this.props, "output page");
    switch (this.props.currentMode) {
      case "NOTES":
        return (
          <div>
            <div>
              {this.props.notes.length ? (
                this.props.notes.map((note, idx) => (
                  <div
                    className="container p-2 bg-white my-2 rounded"
                    key={idx}
                  >
                    {note.text}
                    <i
                      onClick={() => this.props.selectElement(note)}
                      className="fas fa-pencil-alt float-right mt-1 mr-1"
                    ></i>
                  </div>
                ))
              ) : (
                <div className="container p-2 bg-white my-2 rounded">
                  Add notes now!
                </div>
              )}
            </div>
            <div className="container rounded bg-white p-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.createNote(this.state.text);
                }}
                className="form-group"
              >
                <label>Add Text</label>
                <input
                  value={this.state.text}
                  onChange={(e) => this.setState({ text: e.target.value })}
                  className="form-control"
                />
                <button className="btn btn-primary mt-2">Add</button>
              </form>
            </div>
          </div>
        );
      case "TODOS":
        return (
          <div>
            <div>
              {this.props.todos.length ? (
                this.props.todos.map((todo, idx) => (
                  <div
                    className="container p-2 bg-white my-2 rounded"
                    key={idx}
                  >
                    {`${todo.task} - ${todo.status}`}
                    <i
                      onClick={() => this.props.selectElement(todo)}
                      className="fas fa-pencil-alt float-right mt-1 mr-1"
                    ></i>
                  </div>
                ))
              ) : (
                <div className="container p-2 bg-white my-2 rounded">
                  Add todos now!
                </div>
              )}
            </div>
            <div className="container rounded bg-white p-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.createTodo(this.state.text, this.state.status);
                }}
                className="form-group"
              >
                <label>Add Task</label>
                <input
                  value={this.state.text}
                  onChange={(e) => this.setState({ text: e.target.value })}
                  className="form-control"
                />
                <label>Add Status</label>
                <input
                  value={this.state.status}
                  onChange={(e) => this.setState({ status: e.target.value })}
                  className="form-control"
                />
                <button className="btn btn-primary mt-2">Add</button>
              </form>
            </div>
          </div>
        );
      case "REMINDERS":
        return (
          <div>
            <div>
              {this.props.reminders.length ? (
                this.props.reminders.map((reminder, idx) => (
                  <div
                    className="container p-2 bg-white my-2 rounded"
                    key={idx}
                  >
                    {`${reminder.text} - Due ${reminder.due}`}
                    <i
                      onClick={() => this.props.selectElement(reminder)}
                      className="fas fa-pencil-alt float-right mt-1 mr-1"
                    ></i>
                  </div>
                ))
              ) : (
                <div className="container p-2 bg-white my-2 rounded">
                  Add reminders now!
                </div>
              )}
            </div>
            <div className="container rounded bg-white p-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.createReminder(this.state.text, this.state.due);
                }}
                className="form-group"
              >
                <label>Add Task</label>
                <input
                  value={this.state.text}
                  onChange={(e) => this.setState({ text: e.target.value })}
                  className="form-control"
                />
                <label>Due</label>
                <input
                  value={this.state.due}
                  onChange={(e) => this.setState({ due: e.target.value })}
                  className="form-control"
                />
                <button className="btn btn-primary mt-2">Add</button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state, "state log");
  return {
    notes: state.notes.notes,
    todos: state.todos.todos,
    reminders: state.reminders.reminders,
    selectedElement: state.selectedElement,
  };
};

export default connect(mapStateToProps, {
  createNote,
  createTodo,
  createReminder,
  selectElement,
})(Output);
