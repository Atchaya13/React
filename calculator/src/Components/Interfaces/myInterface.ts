export interface IState {
    displayValue: string;
    operator: string;
    firstValue: number;
    secondValue: number;
    flag:number;
    anotherFlag:number
  }
 export interface IAction {
    type: string;
    payload: string | number;
  }