import React, { useState } from "react";
const SmallPagination = () => {
  const [pageNumber, setpageNumber] = useState(1);
  const [limitPerPage, setlimitPerPage] = useState(2);
  const [sortBy, setsortBy] = useState("");

  return (
    <>
      <b>SmallPagination</b>
    </>
  );
};

export default SmallPagination;
