import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-default dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        data-hover="dropdown"
      >
        Dropdown <span className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a href="#">Action</a>
        </li>
        <li>
          <a href="#">Another action</a>
        </li>
        <li className="dropdown">
          <a href="#">One more dropdown</a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">Another action</a>
            </li>
            <li className="dropdown">
              <a href="#">One more dropdown</a>
              <ul className="dropdown-menu">...</ul>
            </li>
            <li>
              <a href="#">Something else here</a>
            </li>
            <li>
              <a href="#">Separated link</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Something else here</a>
        </li>
        <li>
          <a href="#">Separated link</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
