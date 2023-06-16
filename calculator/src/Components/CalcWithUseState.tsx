import React, { useReducer, useState, useRef } from "react";

const ReaclCalc = () => {
  var i: any = 0;
  const [input1, SetInput1] = useState(i);
  const [display, SetDisplay] = useState();
  var operations: any;
  const inputRef = useRef<HTMLInputElement>(null);
  const EnterInput = (input: any) => {
    if (input1 == 0) {
      SetInput1(input1 + input);
    } else {
      SetInput1(input1.toString() + input);
    }
  };
  const Calculate = () => {
 
    if (inputRef.current) {
      let str = inputRef.current.value;
      let arr = str.match(/\d+|[\+\-\*\/]/g);
      if (arr && typeof arr[0] === "number") {
       var  num1= arr[0];
      }
      if (arr && typeof arr[2] === "number") {
        var num2 = arr[2];
      }
      if (arr) {
        var operator: any = arr[1];
      }
    }
    
switch (operator) {
  case "+":
    // if(num1!==undefined&&!num2)
    // {
    //     SetInput1(num1+num2)
    // }
   
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Today is not Monday, Tuesday, or Wednesday");
}
  };
  return (
    <div className="calcBox">
      <div className="calculator card">
        <input
          type="text"
          className="calculator-screen z-depth-1"
          value={input1}
          ref={inputRef}
          disabled
        />
        <div className="calculator-keys">
          <button
            type="button"
            className="operator btn btn-info"
            value="+"
            onClick={() => EnterInput("+")}
          >
            +
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="-"
            onClick={() => EnterInput("-")}
          >
            -
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="*"
            onClick={() => EnterInput("*")}
          >
            &times;
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="/"
            onClick={() => EnterInput("/")}
          >
            &divide;
          </button>
          <button
            type="button"
            value="7"
            className="btn btn-light waves-effect"
            onClick={() => EnterInput(7)}
          >
            7
          </button>
          <button
            type="button"
            value="8"
            className="btn btn-light waves-effect"
            onClick={() => EnterInput(8)}
          >
            8
          </button>
          <button
            type="button"
            value="9"
            className="btn btn-light waves-effect"
            onClick={() => EnterInput(9)}
          >
            9
          </button>
          <button
            type="button"
            value="4"
            className="btn btn-light waves-effect"
            onClick={() => EnterInput(4)}
          >
            4
          </button>
          <button
            type="button"
            value="5"
            className="btn btn-light waves-effect"
            onClick={() => EnterInput(5)}
          >
            5
          </button>
          <button
            type="button"
            value="6"
            className="btn btn-light waves-effect"
            onClick={() => EnterInput(6)}
          >
            6
          </button>
          <button
            type="button"
            value="1"
            className="btn btn-light waves-effect"
            onClick={() => EnterInput(1)}
          >
            1
          </button>
          <button
            type="button"
            value="2"
            className="btn btn-light waves-effect"
            onClick={() => EnterInput(2)}
          >
            2
          </button>
          <button
            type="button"
            value="3"
            className="btn btn-light waves-effect"
            onClick={() => EnterInput(3)}
          >
            3
          </button>
          <button
            type="button"
            value="0"
            className="btn btn-light waves-effect"
            onClick={() => EnterInput(0)}
          >
            0
          </button>
          <button
            type="button"
            className="decimal function btn btn-secondary"
            value="."
          >
            .
          </button>
          <button
            type="button"
            className="all-clear function btn btn-danger btn-sm"
            value="all-clear"
          >
            AC
          </button>
          <button
            type="button"
            className="equal-sign operator btn btn-default"
            value="="
            onClick={Calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default ReaclCalc;
