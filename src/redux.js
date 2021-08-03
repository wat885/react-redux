const redux = require("redux");              //1

const initialState = {                      //4
  counter: 0,
};

//Reducer

const reducer = (state = initialState, action) => {     //3
  if (action.type === "ADD_COUNTER") {                  //7
    return { ...state, counter: state.counter + action.value };
  }
  if (action.type === "INCRESE_COUNTER") {
    return { ...state, counter: state.counter + 1 };
  }

  return state;
};

//Store

const store = redux.createStore(reducer);     //2
console.log(store.getState()); //store.getState() ดึงข้อมูลมาใช่

//Subcription
store.subscribe(()=>{                       // 8 เช็คว่า store มีการอัพเดทไหม
  console.log('[Subscribe]', store.getState())
})

//Action                
action = {                                    //5
  type: "ADD_COUNTER",
  value: 5,
};



//store.dispatch(action)                    //6
store.dispatch({ type: "INCRESE_COUNTER" });   //ส่ง store.dispatch()
console.log(store.getState());
store.dispatch(action);
console.log(store.getState());

