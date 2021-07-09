import React from "react";
import SmallPagination from "./SmallPagination";
const Pagination = (props) => {
  var getPageData = (sortByFinal, limitByFinal, pageNumber) => {
    // console.log(sortByFinal, limitByFinal, pageNumber);
    props.getPaginationValue(sortByFinal, limitByFinal, pageNumber);
  };
  return (
    <>
      <b>Pagination</b>
      <SmallPagination getPageData={getPageData} />
    </>
  );
};

export default Pagination;
