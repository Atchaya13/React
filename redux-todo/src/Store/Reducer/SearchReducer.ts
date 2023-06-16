import { ActionType, ISearchAction } from "../Action/SearchAction";
const initialState="";
export const searchReducer = (
  state = initialState,
  //state:string = '',
  action: ISearchAction
): string => {
  switch (action.type) {
    case ActionType.SEARCHTASK:
      return action.payload;
    default:
      return state;
  }
};
