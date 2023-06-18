import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {

  return (
    <div className={classes.header}>
      <div className={classes.header_left}>
        <h1>React-Router</h1>
      </div>
      <div className={classes.header_right}>
        <div>
          <Link to="/Cart" className={classes.link}>
            Filter
          </Link>
        </div>
        <div>
          <Link to="/Delete" className={classes.link}>
            Delete
          </Link>
        </div>
        <div>
          <Link to="/Comments" className={classes.link}>
            Comments
          </Link>
        </div>
        <div>
          <Link to="/Todo" className={classes.link}>
            Todo
          </Link>
        </div>
        <div>
          <Link to="/Users" className={classes.link}>
            Users
          </Link>
        </div>
        <div>
          <Link to="/Search" className={classes.link}>
            Search
          </Link>
        </div>
        <div>
          <Link to="/Quotes" className={classes.link}>
            Quotes
          </Link>
        </div>
        <div>
          <Link to="/Post" className={classes.link}>
            Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
