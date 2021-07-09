import { useState } from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";
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
      <div style={{ marginTop: "100px" }}>
        <Pagination />
      </div>
    </>
  );
};

export default Report;
