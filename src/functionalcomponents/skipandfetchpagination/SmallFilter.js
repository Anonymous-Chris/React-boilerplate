import React, { useEffect, useState } from "react";

const SmallFilter = (props) => {
  const [dropdown, setDropdown] = useState(props.data);
  // const [selectedItem, setSelectedItem] = useState(props.data[0]);
  // const [selectedItemname, setSelectedItemname] = useState(props.name);

  useEffect(() => {
    setDropdown(props.data);
    // setSelectedItem(props.data[0]);
    // setSelectedItemname(props.name);
  }, [props.data]);

  //   console.log(selectedItem);
  var show = true;
  //   showCheckboxes(props.name);

  function showCheckboxes(name) {
    // console.log(name);
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

  var saveDataSelected = (e, name) => {
    e.preventDefault();
    var markedCheckbox = document.querySelectorAll(
      `input[name=${name}][type="checkbox"]:checked`
    );
    var test = [];
    for (var checkbox of markedCheckbox) {
      test.push(checkbox.value + "_" + name);
    }

    props.getFilters(test, name);

    //document.getElementById(`checkboxes-${name}`).style.display = "none";
  };

  var clearDataSelected = (e, name) => {
    e.preventDefault();
    var clearCheckbox = document.querySelectorAll(
      `input[name=${name}][type="checkbox"]`
    );
    for (var checkbox of clearCheckbox) {
      checkbox.checked = false;
    }
    props.getFilters("", name);
  };

  return (
    <React.Fragment>
      {dropdown.length > 0 && (
        <div>
          <form>
            <div className="multipleSelection">
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
                <ReturnCheckbox
                  key={props.name}
                  data1={props.data}
                  name1={props.name}
                />{" "}
                <button onClick={(e) => saveDataSelected(e, props.name)}>
                  Save
                </button>
                <button onClick={(e) => clearDataSelected(e, props.name)}>
                  Clear
                </button>
              </div>
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
      {/* {console.log(props.data1)} */}

      {props.data1.map((item, index) => {
        // console.log(item);
        return (
          <label htmlFor={`${index}-${props.name1}`} key={index}>
            <input
              type="checkbox"
              name={props.name1}
              id={`${index}-${props.name1}`}
              value={item}
            />
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
