import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./search.css";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log(input);
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <img src="/images/mice.svg" alt="" />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search}>
            Google Search
          </Button>
          <Button>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
