import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallFilter from "./SmallFilter";

const Filter = () => {
  const [dropdown, setDropdown] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [extraDropdowns, setExtraDropdowns] = useState([]);
  let [dict, setDict] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:1880/beta/new/reportsfilter`).then((res) => {
      setDropdown(res.data);
    });
  }, []);

  var changeSelectedValue = (e) => {
    setSelectedValue(e.target.value);
    openDropdown(e.target.value);
  };

  var openDropdown = (e) => {
    dropdown.map((item) => {
      if (item.category === e) {
        var extra = item.child;
        setExtraDropdowns(extra);
      }
    });
  };
  var getFilters = (val, name) => {
    // console.log(name);
    var temp = [];
    // console.log(val + " from child");
    if (val.length > 0) {
      dict = dict.filter((a) => !a.includes(`${name}`));
      val.map((item) => {
        var index = dict.indexOf(item);
        if (index === -1) {
          temp.push(item);
        }
      });
    }
    // console.log(temp);
    temp.map((item) => {
      dict.push(item);
    });

    if (val === "") {
      dict = dict.filter((a) => !a.includes(`${name}`));
    }
    console.log(dict);
  };

  return (
    <React.Fragment>
      {console.log(dict)}
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
