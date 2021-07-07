import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallFilter from "./SmallFilter";

const Filter = () => {
  const [dropdown, setDropdown] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [extraDropdowns, setExtraDropdowns] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:1880/beta/new/reportsfilter`).then((res) => {
      //  console.log(res.data);
      setDropdown(res.data);
    });
  }, []);

  //   console.log(dropdown);
  var changeSelectedValue = (e) => {
    // console.log(e.target.value);
    setSelectedValue(e.target.value);
    openDropdown(e.target.value);
  };

  var openDropdown = (e) => {
    console.log(e);
    dropdown.map((item) => {
      if (item.category === e) {
        // console.log(item);
        var extra = item.child;
        setExtraDropdowns(extra);
      }
    });
  };

  var getFilters = (val, name) => {
    console.log(val, name);
  };

  //   console.log(extraDropdowns);
  return (
    <React.Fragment>
      Filter
      {dropdown.length > 0 && (
        <div className="row w-100 pl-2">
          <select
            value={selectedValue}
            className=""
            onChange={changeSelectedValue}
          >
            {dropdown.map((item, index) => (
              <option key={index} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
        </div>
      )}
      {console.log(extraDropdowns)}
      {extraDropdowns.length > 0 &&
        extraDropdowns.map((item, index) => {
          return (
            <div key={index}>
              <span>
                <b>{item.name}</b>
              </span>
              <SmallFilter
                data={item.filterBy}
                name={item.name}
                getFilters={getFilters}
              />
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default Filter;
