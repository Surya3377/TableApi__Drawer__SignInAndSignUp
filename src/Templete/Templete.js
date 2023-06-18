import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from "react-router-dom";
import classes from "./Templete.module.css";
import SignInSide from "./SignInSide";
import SignUpSide from "./SignUpSide";
import Startfreetrail from "./Startfreetrail";
import Learnmore from "./Learnmore";
import Button from '@mui/material/Button';


const Template = () => {
  return (
    <Router>
    <div>
        <div className={classes.header}>
          <div className={classes.header_left}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAeFBMVEX///8AAAD8/Pze3t45OTm2trbz8/OFhYXt7e2tra3Z2dnGxsbm5ua7u7uWlpaJiYmTk5NwcHDBwcGenp6np6d5eXkjIyNeXl7Ozs4rKyv29vZnZ2dFRUVUVFRQUFBsbGwSEhIvLy8+Pj4bGxsQEBBJSUl/f39SUlKchllnAAAEoklEQVR4nO3c2WKiMBQG4AEE2RcBwaWbrfb933CK2pbKloRstv93W2dOOIaQ5eC/fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADKmabqFtwLPz4YxjoJVCTMtTPDMCrPVRCbmmOXxpdjXsuMvY2SzVfsTRrIjE1v6z0at3a2IyV2mO87sTNt8+UU3Uxd7FNfcOzV6XkgdrYSHJrF6mGgtVdLcfmKdspCs6iz8eZev2QBN8XW6958Xc+xnKFgmultppt7deL6JZvRRHduqaQ+agZY5XRDf0hCTpFXFWXkXPHcLyD/ar8tvPk3hZ8wBDaWvL4oBt4rS4sbM28Kihv/xoOiwb5gbfDZa87avfzTrMBHBXOveak6yyyGuKvF7LgvktOVz09V42DThd3GfOLuJabL5tPks4I8rLvkF/bI0qsZBG/82txItkRhfZYH74hKwr5EOLQAnCGZbrf/LiCs4FSZtFNQQk/j6arnj+q9PJG54jlY3SiH54vBQVjUg7BpV8g8FSSy6594iepVVycxuWJaYFApu+mqBQyRNyL+qfKFN7qR/FzrWpyfgP0q3gtsQQN7V/odM5zY1OOHcm48zmJeMbO33OQ4BZ1U8ctVKrHZjWYxwmlhQxWTA0fs46jPYsl5lUAgnc7EtJX0Ziuymb8lKX7CoI+Zp2am/FtQpVmrRTmTK408sk+5BC4FtcW6cSNzoqMPtoFLylJDQwz7NuaL6kYrU9LmyhmqSvkLdnS5ClW3V609Ta4s1a1VbUE+hfhz06uuDWm2atUt1QLZShH96uyN5DgzUN1KbUzfid2x/XXRkL/BJM9b/wWup7LVvgf3iVe3lkpmWHuJ+MMWiV6yfGW1xibHj+L2vv96PFdf86uHeOj4MbRPL/Kvi7sqrQc6jhstPw9ID2O5ci+fOdoTHdD1jsqukoenqdVymK/PHxw5yDDPGY2JCi/dQuaJD0+Hqa5wUZ8LDLPBvzc1BRRr7uAet1Er8uqGbbOlng/8MaM+bfTFlWyIUdGVK2/ToZTkLFvQkerLp/FMXyPtVEZfjWC9ZttRJXoTRQsx0/X5fTvNFMWdP93LTj1rKZbJteRtbPNrXZVpXti2XRRpkj3yXgfss2VcfPz3XpGnZTX2wDnyvOI5tuue1r2WedAznIZBfur7OK1dGvUMJqa1isu+Oc3wFEA68/byd/boAOhEs0a6Qz5emO3YTzf/gnpbXSSz3bITUUVKzXjS9k72GnHQfmlFq1y1xi2alyYi+mkazQt43md/H13iqXAptikpX1wI6SoKaZ9L1+p5/X5j4mOYODEU7bjk6WKZ3Fh7bnVqXBVkr5V0OGSDPWuxmS+gGlklglL34138AogcUxWkv6x3zGSNTVTRrW4Nv0u/VN00DQ29HYtbsE//9oWkV07vTt/5LoarId19V11+Q0ZHt3ci+tWYn1sRev2Wk37aZb9CX2H+DbbfudJod1NX349E1S25B59bwjr8Opj2nEuuKOur/6rLukfh74LdlSZXmp0x6CvG1J2ciRGLwlLLQwZNuZhjUcCGHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBf8h+3v0eGk86LjgAAAABJRU5ErkJggg=="
              alt="logo"
              height="100px"
              width="100px"
            />
          </div>

          <div className={classes.header_right}>
            <div>
              <Link to="/signin" className={classes.signin}>
                Sign In
              </Link>
              <Link to="/signup" className={classes.signUp}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/signup" element={<SignUpSide />} />
        </Routes>

        <div>
          <h1>Landing template for startups</h1>
          <h3>
            Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
          </h3>
          <Link to="/Startfreetrial" className={classes.Startfreetrail}>
            Start Free Trial
          </Link>
          <Link href="/Learnmore" target="_blank" className={classes.Learnmore}>
            Learn More
          </Link>
          <Routes>
            <Route path="/startfreetrial" element={<Startfreetrail />} />
            <Route path="/Learnmore" element={<Learnmore />} />
          </Routes>
        </div>
    </div>
    </Router>
  );
};

export default Template;
