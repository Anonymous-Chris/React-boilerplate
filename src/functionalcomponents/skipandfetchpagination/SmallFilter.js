import React, { useEffect, useState } from "react";

const SmallFilter = (props) => {
  const [dropdown, setDropdown] = useState(props.data);
  // const [selectedItem, setSelectedItem] = useState(props.data[0]);
  // const [selectedItemname, setSelectedItemname] = useState(props.name);

  useEffect(() => {
    setDropdown(props.data);
  }, [props.data]);

  var show = true;

  function showCheckboxes(name) {
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
    console.log(test);
    if (test.length > 0) {
      props.getFilters(test, name);
    } else {
      props.getFilters("", name);
    }

    document.getElementById(`checkboxes-${name}`).style.display = "none";
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
    </div>
  );
};
