import React, { useState } from "react";
import { ISearch } from "./Interface/Interface";
const Search = (props:ISearch) => {
    const Search=(searchTerm:string)=>{
        props.search(searchTerm);
    }
  return (
    <div className="searchText">
      <b>Search:</b>
      <input type="text" className="form-control" onChange={(e)=>Search(e.target.value)}></input>
    </div>
  );
};
export default Search;
