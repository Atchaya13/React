import React, { useReducer } from "react";

type Action =
  | { type: "add"; payload: number }
  | { type: "subtract"; payload: number }
  | { type: "multiply"; payload: number }
  | { type: "divide"; payload: number };

interface State {
  result: number;
}

const initialState: State = {
  result: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return { ...state, result: state.result + action.payload };
    case "subtract":
      return { ...state, result: state.result - action.payload };
    case "multiply":
      return { ...state, result: state.result * action.payload };
    case "divide":
      return { ...state, result: state.result / action.payload };
    default:
      return state;
  }
};

const Calc: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Result: {state.result}</div>
      <button onClick={() => dispatch({type: "add",payload:10})}>
        +10
      </button>
      <button onClick={() => dispatch({ type: "subtract", payload: 10 })}>
        -10
      </button>
      <button onClick={() => dispatch({ type: "multiply", payload: 10 })}>
        x10
      </button>
      <button onClick={() => dispatch({ type: "divide", payload: 10 })}>
        /10
      </button>
    </div>
  );
};

export default Calc;
