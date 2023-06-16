import React, { useReducer, useState, useRef } from "react";
import { IState, IAction } from "./Interfaces/myInterface";

const initialState: IState = {
  displayValue: "0",
  operator: "",
  firstValue: 0,
  secondValue: 0,
  flag: 0,
  anotherFlag: 0,
};
const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "updateDisplay":
      let num = "";
      if (state.displayValue !== "0") {
        num = state.displayValue + action.payload.toString();
      } else {
        num = action.payload.toString();
      }
      return {
        ...state,
        displayValue: num,
      };
    case "setOperator":
      return {
        ...state,
        operator: action.payload as string,
        firstValue: Number(state.displayValue),
        displayValue: "0",
        flag: state.flag + 1,
      };
    case "clear":
      return initialState;
    case "calculate":
      if (state.flag - 1 === state.anotherFlag) {
        state.secondValue = Number(state.displayValue);
        const { firstValue, secondValue, operator } = state;
        let result: number;
        switch (operator) {
          case "+":
            result = firstValue + secondValue;
            break;
          case "-":
            result = firstValue - secondValue;
            break;
          case "*":
            result = firstValue * secondValue;
            break;
          case "/":
            result = firstValue / secondValue;
            break;
          default:
            result = secondValue;
        }
        return {
          ...state,
          displayValue: result.toString(),
          firstValue: result,
          anotherFlag: state.flag,
        };
      }
      return {
        ...state,
        anotherFlag: state.flag,
      };

    default:
      return state;
  }
};
const NewCalc = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateDisplay = (value: number | string) => {
    dispatch({ type: "updateDisplay", payload: value });
  };

  const setOperator = (operator: string) => {
    dispatch({ type: "setOperator", payload: operator });
  };

  const clear = () => {
    dispatch({ type: "clear", payload: 0 });
  };

  const calculate = () => {
    dispatch({ type: "calculate", payload: 0 });
  };
  return (
    <div className="calcBox">
      <div className="calculator card">
        <input
          type="text"
          className="calculator-screen z-depth-1"
          value={state.displayValue}
          disabled
        />
        <div className="calculator-keys">
          <button
            type="button"
            className="operator btn btn-info"
            value="+"
            onClick={() => setOperator("+")}
          >
            +
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="-"
            onClick={() => setOperator("-")}
          >
            -
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="*"
            onClick={() => setOperator("*")}
          >
            &times;
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="/"
            onClick={() => setOperator("/")}
          >
            &divide;
          </button>
          <button
            type="button"
            value="7"
            className="btn btn-light waves-effect"
            onClick={() => updateDisplay("7")}
          >
            7
          </button>
          <button
            type="button"
            value="8"
            className="btn btn-light waves-effect"
            onClick={() => updateDisplay("8")}
          >
            8
          </button>
          <button
            type="button"
            value="9"
            className="btn btn-light waves-effect"
            onClick={() => updateDisplay("9")}
          >
            9
          </button>
          <button
            type="button"
            value="4"
            className="btn btn-light waves-effect"
            onClick={() => updateDisplay("4")}
          >
            4
          </button>
          <button
            type="button"
            value="5"
            className="btn btn-light waves-effect"
            onClick={() => updateDisplay("5")}
          >
            5
          </button>
          <button
            type="button"
            value="6"
            className="btn btn-light waves-effect"
            onClick={() => updateDisplay("6")}
          >
            6
          </button>
          <button
            type="button"
            value="1"
            className="btn btn-light waves-effect"
            onClick={() => updateDisplay("1")}
          >
            1
          </button>
          <button
            type="button"
            value="2"
            className="btn btn-light waves-effect"
            onClick={() => updateDisplay("2")}
          >
            2
          </button>
          <button
            type="button"
            value="3"
            className="btn btn-light waves-effect"
            onClick={() => updateDisplay("3")}
          >
            3
          </button>
          <button
            type="button"
            value="0"
            className="btn btn-light waves-effect"
            onClick={() => updateDisplay("0")}
          >
            0
          </button>
          <button
            type="button"
            className="decimal function btn btn-secondary"
            value="."
            onClick={() => updateDisplay(".")}
          >
            .
          </button>
          <button
            type="button"
            className="all-clear function btn btn-danger btn-sm"
            value="all-clear"
            onClick={clear}
          >
            AC
          </button>
          <button
            type="button"
            className="equal-sign operator btn btn-default"
            value="="
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewCalc;
