import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
const SmallPagination = () => {
  const [pageNumber, setpageNumber] = useState(1);
  const [limitPerPage, setlimitPerPage] = useState([]);
  const [sortBy, setsortBy] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // console.log("here");
    axios.get(`http://localhost:1880/beta/new/pagination`).then((res) => {
      //   console.log(res.data[0]);
      setlimitPerPage(res.data[0].numData);
      setsortBy(res.data[0].sort);
      setTotalPages(res.data[0].totalData);
    });
  }, []);

  var decreasePage = () => {
    if (pageNumber > 1) {
      setpageNumber(pageNumber - 1);
    }
  };

  var increasePage = () => {
    if (pageNumber < totalPages) {
      setpageNumber(pageNumber + 1);
    }
  };

  var changePage = (e) => {
    console.log(e.target.value);
    if (e.target.value <= totalPages) {
      setpageNumber(e.target.value);
    }
  };
  return (
    <>
      {/* {console.log(pageNumber, limitPerPage, sortBy, totalPages)} */}
      <b>SmallPagination</b>
      <br />
      <div style={{ display: "inline-flex" }} className="threesips">
        <div>
          <Dropdown data={sortBy} />
        </div>
        <div>
          <Dropdown data={limitPerPage} />
        </div>
        <span>
          <input type="text" value={pageNumber} onChange={changePage}></input>{" "}
          of {totalPages} page
        </span>

        <div className="pagination">
          {/* <i className="fa fa-angle-double-left" aria-hidden="true"></i> */}
          <i
            className="fas fa-angle-left"
            aria-hidden="true"
            onClick={decreasePage}
          ></i>
          <i
            className="fas fa-angle-right"
            aria-hidden="true"
            onClick={increasePage}
          ></i>
          {/* <i className="fa fa-angle-double-right" aria-hidden="true"></i> */}
        </div>
      </div>
    </>
  );
};

export default SmallPagination;
