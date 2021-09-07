import React from "react";
import { connect } from "react-redux";
import { changeMode } from "../actions/changeMode";
import Output from "./Output";
import Update from "./Update";

class Home extends React.Component {
  render() {
    console.log(this.props, "home page");
    return (
      <div className="container">
        <div className="row text-center my-5">
          <h1 className="display-1 text-white">What are you doing today?</h1>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-md-3"></div>
          <div className="col-md-2">
            <button
              onClick={() => this.props.changeMode("NOTES")}
              className="btn btn-info"
            >
              Notes
            </button>
          </div>
          <div className="col-md-2">
            <button
              onClick={() => this.props.changeMode("TODOS")}
              className="btn btn-info"
            >
              Todos
            </button>
          </div>
          <div className="col-md-2">
            <button
              onClick={() => this.props.changeMode("REMINDERS")}
              className="btn btn-info"
            >
              Reminders
            </button>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
            {console.log(this.props)}
            <Output currentMode={this.props.mode} />
          </div>
        </div>
        <div id="update" className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <Update element={this.props.selectedElement} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { mode: state.mode, selectedElement: state.selectedElement };
};

export default connect(mapStateToProps, {
  changeMode,
})(Home);
