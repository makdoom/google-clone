import React from "react";
import { useStateValue } from "../../StateProvider";
import "./searchPage.css";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__result"></div>
    </div>
  );
};

export default SearchPage;
