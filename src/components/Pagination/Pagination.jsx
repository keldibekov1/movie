import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationC = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="container mx-auto flex justify-center my-10">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#fff",
            borderColor: "#444",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#C61F1F",
            color: "#fff",
            borderColor: "#C61F1F",
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "#2c2c2c",
          },
        }}
      />
    </div>
  );
};

export default PaginationC;
