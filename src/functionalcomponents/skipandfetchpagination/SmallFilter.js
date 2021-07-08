import React, { useEffect, useState } from "react";

const SmallFilter = (props) => {
  const [dropdown, setDropdown] = useState(props.data);
  const [selectedItem, setSelectedItem] = useState(props.data[0]);
  const [selectedItemname, setSelectedItemname] = useState(props.name);

  useEffect(() => {
    setDropdown(props.data);
    setSelectedItem(props.data[0]);
    setSelectedItemname(props.name);
  }, [props.data]);
  //   console.log(dropdown);
  var changeValue = (e, name) => {
    // console.log(e.target.value, name);
    setSelectedItem(e.target.value);
    props.getFilters(e.target.value, name);
  };
  //   console.log(selectedItem);
  var show = true;
  //   showCheckboxes(props.name);

  function showCheckboxes(name) {
    console.log(name);
    try {
      var checkboxes = document.getElementById(`checkboxes-${name}`);
      if (show) {
        checkboxes.style.display = "block";
        show = false;
      } else {
        checkboxes.style.display = "none";
        show = true;
      }
    } catch (e) {
      console.log("errro");
    }
  }

  return (
    <React.Fragment>
      {dropdown.length > 0 && (
        // <div className="row w-100 pl-2">
        //   <select className="">
        //     {dropdown.map((item, index) => (
        //       <option key={index} value={item}>
        //         {checkBoxes(item)}
        //       </option>
        //     ))}
        //   </select>
        // </div>

        <div>
          <form>
            <div className="multipleSelection">
              {/* {console.log(props.name)} */}
              <div
                className="selectBox"
                onClick={() => showCheckboxes(props.name)}
              >
                <select>
                  <option>Select options</option>
                </select>
                <div className="overSelect"></div>
              </div>

              <div id={`checkboxes-${props.name}`} style={{ display: "none" }}>
                <ReturnCheckbox data1={props.data} name1={props.name} />{" "}
              </div>
              {console.log("hello")}
            </div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default SmallFilter;

var ReturnCheckbox = (props) => {
  return (
    <div>
      {console.log(props.data1)}

      {props.data1.map((item, index) => {
        console.log(item);
        return (
          <label htmlFor={`${index}-${props.name1}`}>
            <input type="checkbox" id={`${index}-${props.name1}`} />
            {item}
          </label>
        );
      })}
      {/* <label htmlFor={`first-${props.name}`}>
          <input type="checkbox" id={`first-${props.name}`} />
          checkBox1
        </label>

        <label htmlFor={`second-${props.name}`}>
          <input type="checkbox" id={`second-${props.name}`} />
          checkBox2
        </label>
        <label htmlFor={`third-${props.name}`}>
          <input type="checkbox" id={`third-${props.name}`} />
          checkBox3
        </label>
        <label htmlFor={`fourth-${props.name}`}>
          <input type="checkbox" id={`fourth-${props.name}`} />
          checkBox4
        </label> */}
    </div>
  );
};
