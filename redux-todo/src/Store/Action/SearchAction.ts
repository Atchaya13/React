export enum ActionType {
  SEARCHTASK = "SEARCHTASK",
  ADDTASK="ADDTASK"
}
export interface ISearchAction {
  type: ActionType;
  payload: string;
}
export const searchTask = (searchTerm: string) => ({
  type: ActionType.SEARCHTASK,
  payload:searchTerm
});
