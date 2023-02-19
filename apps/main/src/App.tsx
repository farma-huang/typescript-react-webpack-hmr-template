  import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="header"></div>
      <div className="container">
        <div className="sidebar">
          <button>
            <Link to={`sub_app_1`}>Sub App 1</Link>
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