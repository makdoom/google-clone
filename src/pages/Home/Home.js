import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import "./home.css";
import { Avatar } from "@material-ui/core";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="header__right">
          <Link to="/about">Gmail</Link>
          <Link to="/store">Images</Link>
          <AppsIcon className="apps__icon" />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt=""
        />
        <Search />
      </div>
    </div>
  );
};

export default Home;
