
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
            <button onClick={() => this.props.addNum({ type: "ADD_NUM",num: this.props.data })}>
              addNum
            </button>
            <button onClick={() => this.props.addPerson({ type: "ADD_PERSON" })}>
              addPerson
            </button>
          </div>

        <ul>
          {this.props.state.arr.map((num, idx) => <li key={idx}>{num}</li>  )}
          {this.props.state.arrObj.map((obj, idx) => <li key={idx}>name : {obj.name}</li>  )}
        </ul>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.count,
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch({ type: "INCREATE" }),
    minus: (action) => dispatch(action),
    reset: (action) => dispatch(action),
    addNum: (action) => dispatch(action),
    addPerson: (action) => dispatch(action),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
