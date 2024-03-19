import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./FilterBy.css";

const FilterBy = (props) => {
  const [rangeValue, setRangeValue] = useState(0);
  const [filteredValue, setFilteredValue] = useState('');
  const rangeInputChangeHandler = (e) => {
    setRangeValue(+e.target.value);
    props.priceFilterHandler(+e.target.value);
  };

  const searchFilterhandler = (e) => {
    setFilteredValue(e.target.value);
    props.searchFilterHandler(e.target.value);
  }

  const clearFilterhandler = () => {
    props.clearFilter();
    setRangeValue(0);
    setFilteredValue('');
  }

  return (
    <div className="filterBy">
      <div className="filterBy-search">
        <input type="text" value={filteredValue} onChange={searchFilterhandler} name="searchResult" placeholder="Search" />
      </div>
      <div className="filterBy-category">
        <h3>Category</h3>
        <ul>
          <li>
            <NavLink
              className={(elem) => (elem.isActive ? ".active-category" : "")}
              to={"/products"}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(elem) => (elem.isActive ? ".active-category" : "")}
              to={"/products/?category=mobile"}
            >
              Mobile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(elem) => (elem.isActive ? ".active-category" : "")}
              to={"/products/?category=laptop"}
            >
              Laptop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(elem) => (elem.isActive ? ".active-category" : "")}
              to={"/products/?category=computer"}
            >
              Computer
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(elem) => (elem.isActive ? ".active-category" : "")}
              to={"/products/?category=accessories"}
            >
              Accessories
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(elem) => (elem.isActive ? ".active-category" : "")}
              to={"/products/?category=watch"}
            >
              Watch
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <div className="filterBy-company">
        <h3>Company</h3>
        <select name="company">
          <option value="all">All</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="oppo">Oppo</option>
          <option value="gucci">Gucci</option>
        </select>
      </div> */}
      <div className="filterBy-price">
        <h3>Price</h3>
        <div className="price-range">
          <label htmlFor="price-filter">
            &#8377; {rangeValue.toLocaleString("en-US")}
          </label>
          <input
            onChange={rangeInputChangeHandler}
            typeof="price-filter"
            name="price-filter"
            type="range"
            min="0"
            max="100000"
            value={rangeValue}
          />
        </div>
      </div>
      <button onClick={clearFilterhandler} className="clear-filter-btn">Clear Filter</button>
    </div>
  );
};

export default FilterBy;
