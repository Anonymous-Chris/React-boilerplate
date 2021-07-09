import React, { useEffect, useState } from "react";
const Dropdown = (props) => {
  const [dropdown, setDropdown] = useState(props.data);
  const [selectedValue, setSelectedValue] = useState("");
  // console.log(props.data[0].value);
  useEffect(() => {
    setDropdown(props.data);
    // console.log(props.data);
    if (props.data.length > 0) {
      props.getValue(props.data[0].value);
    }

    // return () => {};
  }, [props.data]);

  var changeSelectedValue = (e) => {
    setSelectedValue(e.target.value);
    props.getValue(e.target.value);
  };
  return (
    <>
      {/* {console.log(dropdown)} */}
      <div style={{ display: "inline-block" }}>
        {dropdown.length > 0 && (
          <div className=" w-100 pl-2 ">
            <select
              value={selectedValue}
              className=""
              onChange={changeSelectedValue}
            >
              {dropdown.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
