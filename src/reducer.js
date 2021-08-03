const initialState = {                                //2
  count: 0,
};

const reducer = (state = initialState, action) => {   //1
  switch (action.type) {                              //4
    case "INCREATE":
      return {...state, count: state.count +1};
    case "DECRETE":
      return {...state, count: state.count -1};
    case "RESET":
      return {...state, count: 0};
    default:
      return state
  }

  return state;
};

export default reducer;                               //3
