import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTask } from "../Store/search";
const Search = () => {
  const dispatch = useDispatch();
    const Search=(searchTerm:string)=>{
      dispatch(searchTask(searchTerm));
    }
  return (
    <div className="searchText">
      <b>Search:</b>
      <input type="text" className="form-control" onChange={(e)=>Search(e.target.value)}></input>
    </div>
  );
};
export default Search;