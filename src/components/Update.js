import React from "react";
import { connect } from "react-redux";
import { editReminder } from "../actions/reminderActions";
import { editNote } from "../actions/noteActions";
import { editTodo } from "../actions/todoActions";

class Update extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      todo: "",
      reminder: "",
      due: "",
      status: "",
    };
  }

  render() {
    console.log(this.props);
    if (!this.props.element) {
      return null;
    }
    switch (this.props.element.type) {
      case "note":
        return (
          <div className="container p-2 bg-white my-2 rounded">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.props.editNote(
                  this.props.selectedElement.id,
                  this.state.text
                );
              }}
              className="form-group"
            >
              <label>Text</label>
              <input
                value={this.state.text}
                onChange={(e) => this.setState({ text: e.target.value })}
                placeholder={this.props.selectedElement.text}
                className="form-control"
              />
              <button className="btn btn-primary mt-2">Update</button>
            </form>
          </div>
        );

      case "todo":
        return (
          <div className="container p-2 bg-white my-2 rounded">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const todo = this.state.todo
                  ? this.state.todo
                  : this.props.selectedElement.task;
                const status = this.state.status
                  ? this.state.status
                  : this.props.selectedElement.status;
                this.props.editTodo(
                  this.props.selectedElement.id,
                  todo,
                  status
                );
              }}
              className="form-group"
            >
              <label>Task</label>
              <input
                value={this.state.todo}
                onChange={(e) => this.setState({ todo: e.target.value })}
                placeholder={this.props.selectedElement.task}
                className="form-control"
              />
              <label>Status</label>
              <input
                value={this.state.status}
                onChange={(e) => this.setState({ status: e.target.value })}
                placeholder={this.props.selectedElement.status}
                className="form-control"
              />
              <button className="btn btn-primary mt-2">Update</button>
            </form>
          </div>
        );

      case "reminder":
        return (
          <div>
            <div className="container p-2 bg-white my-2 rounded">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const reminder = this.state.reminder
                    ? this.state.reminder
                    : this.props.selectedElement.text;
                  const due = this.state.due
                    ? this.state.due
                    : this.props.selectedElement.due;
                  this.props.editReminder(
                    this.props.selectedElement.id,
                    reminder,
                    due
                  );
                }}
                className="form-group"
              >
                <label>Task</label>
                <input
                  value={this.state.reminder}
                  onChange={(e) => this.setState({ reminder: e.target.value })}
                  placeholder={this.props.selectedElement.text}
                  className="form-control"
                />
                <label>Due</label>
                <input
                  value={this.state.due}
                  onChange={(e) => this.setState({ due: e.target.value })}
                  placeholder={this.props.selectedElement.due}
                  className="form-control"
                />
                <button className="btn btn-primary mt-2">Update</button>
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
  return { selectedElement: state.selectedElement };
};

export default connect(mapStateToProps, {
  editNote,
  editReminder,
  editTodo,
})(Update);
