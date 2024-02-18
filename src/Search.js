import React from "react";
import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  const quaryParams = new URLSearchParams(location.search);
  const searchTerm = quaryParams.get("query");
  return <div>Search : {searchTerm}</div>;
}

export default Search;
