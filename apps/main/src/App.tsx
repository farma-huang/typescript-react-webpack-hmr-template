  import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = React.lazy(() =>
    // @ts-ignore
    import("uapp1/Nav").then((module) => {
        return {
            default: module.Nav,
        };
    })
);

import "./App.css";

const App = () => {
  return (
    <>
      <div className="header"></div>
      <div className="container">
        <div className="sidebar">
          <button>
            <Link to={`uapp1`}><Nav /></Link>
          </button>
          <button>
            <Link to={`sub_app_2`}>Sub App 2</Link>
          </button>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;