import React, { useEffect, useState } from "react";
const Dropdown = (props) => {
  const [dropdown, setDropdown] = useState(props.data);
  useEffect(() => {
    setDropdown(props.data);
  }, [props]);
  return (
    <>
      <span>dropdown</span>
      {console.log(dropdown)}
    </>
  );
};

export default Dropdown;
