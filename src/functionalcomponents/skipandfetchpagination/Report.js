import { useState } from "react";
import Filter from "./Filter";

const Report = () => {
  const [_apiPathState, setApiPath] = useState("");
  var chrisNeeds = (value) => {
    console.log(value);
  };

  var apiPath = (val) => {
    console.log(val + " apipath");
    setApiPath(val);
  };
  return (
    <>
      {console.log(_apiPathState)}
      <Filter chrisNeeds={chrisNeeds} apiPath={apiPath} />
    </>
  );
};

export default Report;
