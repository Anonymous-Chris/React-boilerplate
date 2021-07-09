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
  return (
    <>
      {/* {console.log(pageNumber, limitPerPage, sortBy, totalPages)} */}
      <b>SmallPagination</b>
      <br />
      <div style={{ display: "inline-flex" }} className="threesips">
        <Dropdown data={sortBy} />
        <Dropdown data={limitPerPage} />
        <div className="pagination">
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
          <i class="fas fa-angle-left" aria-hidden="true"></i>
          <i class="fas fa-angle-right" aria-hidden="true"></i>
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};

export default SmallPagination;
