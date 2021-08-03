
import "./App.css";
import { connect } from "react-redux";                        //2 เชือม react redux
import React from "react";

class App extends React.Component {                           //1
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.data}
          <div>
            <button onClick={this.props.plus}>
              +
            </button>
            <button onClick={() => this.props.minus({ type: "DECRETE" })}>
              -
            </button>
            <button onClick={() => this.props.reset({ type: "RESET" })}>
              reset
            </button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch({ type: "INCREATE" }),
    minus: (action) => dispatch(action),
    reset: (action) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
