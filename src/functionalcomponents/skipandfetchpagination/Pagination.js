import React from "react";
import SmallPagination from "./SmallPagination";
const Pagination = () => {
  var getPageData = (sortByFinal, limitByFinal, pageNumber) => {
    console.log(sortByFinal, limitByFinal, pageNumber);
  };
  return (
    <>
      <b>Pagination</b>
      <SmallPagination getPageData={getPageData} />
    </>
  );
};

export default Pagination;
