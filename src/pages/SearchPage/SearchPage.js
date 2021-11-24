import React from "react";
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import "./searchPage.css";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MovieIcon from "@material-ui/icons/Movie";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const data = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <div className="header__left">
          <Link to="/">
            <img
              className="searchPage__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt=""
            />
          </Link>
          <div className="searchPage__headerBody">
            <Search hideButtons />
          </div>
        </div>
        <div className="header__right">
          <IconButton className="icon__button">
            <SettingsIcon />
          </IconButton>
          <IconButton className="icon__button">
            <AppsIcon />
          </IconButton>
          <Avatar fontSize="small" />
        </div>
      </div>
      <div className="searchPage__options">
        <div className="searchPage__optionsLeft">
          <div className="searchPage__option active">
            <SearchIcon fontSize="small" />
            <Link to="/all">All</Link>
          </div>
          <div className="searchPage__option">
            <DescriptionIcon fontSize="small" />
            <Link to="/news">News</Link>
          </div>
          <div className="searchPage__option">
            <ImageIcon fontSize="small" />
            <Link to="/images">Images</Link>
          </div>
          <div className="searchPage__option">
            <LocalOfferIcon fontSize="small" />
            <Link to="/shopping">Shopping</Link>
          </div>
          <div className="searchPage__option">
            <MovieIcon fontSize="small" />
            <Link to="/videos">Videos</Link>
          </div>
          <div className="searchPage__option">
            <LocationOnIcon fontSize="small" />
            <Link to="/videos">Maps</Link>
          </div>
          <div className="searchPage__option">
            <MoreVertIcon fontSize="small" />
            <Link to="/all">More</Link>
          </div>
        </div>
        <div className="searchPage__optionsRight">
          <Link to="/tools">Tools</Link>
        </div>
      </div>
      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item, index) => (
            <div className="searchPage__result" key={index}>
              <a href={item.link} className="result__header">
                <span>{item.link}</span>
                <MoreVertIcon fontSize="small" />
              </a>
              <div className="result__title">
                <a href={item.link}>
                  <p>{item.title}</p>
                </a>
                <p className="result__snippet">{item.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
