
import "./App.css";
import { connect } from "react-redux";                        //2 เชือม react redux
import React from "react";

class App extends React.Component {                           //1
  state ={
    name: "",
    email: ""
  }
  AddHistory = (e)=> {

    e.preventDefault();
    
    this.props.addHistory({type: "ADD_HISTORY" , name: this.state.name , email: this.state.email})
    this.setState({name:'', email: ''})
  }

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
          {/* {this.props.state.arrObj.map((obj, idx) => <li key={idx}>name : {obj.name}</li>  )} */}
          {this.props.state.arrObj.map((obj, idx) => (obj.name? obj.email? <li key={idx}> name : {obj.name} e-mail : {obj.email} </li> : <li key={idx}> name : {obj.name} e-mail : No email  </li> :null)  )}
        </ul>


        <form onSubmit = {this.AddHistory} >
          {/* <p>{this.state.name}</p> */}
          <input type='text' placeholder='name' onChange={(e) => this.setState({name: e.target.value})} value={this.state.name}></input>
          <input type='text' placeholder='email'onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}></input>
          <button type='submit' >submit</button>
        </form>
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
    addHistory: (action) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
