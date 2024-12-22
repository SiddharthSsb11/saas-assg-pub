import "./Pagination.css";
const Pagination = ({
  totalRows,
  rowsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  // Handle page navigation
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginationRange = () => {
    const range = [];
    const showPages = 5; // Maximum number of page buttons to display

    if (totalPages <= showPages) {
      // Show all pages if totalPages is less than or equal to showPages
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show the last few pages and the first page with truncation
        range.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Show the current page with surrounding pages and truncation
        range.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return range;
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {getPaginationRange().map((item, index) =>
        item === "..." ? (
          <span key={index} className="pagination-ellipsis">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`pagination-btn ${currentPage === item ? "active" : ""}`}
            onClick={() => handlePageClick(item)}
          >
            {item}
          </button>
        )
      )}
      <button
        className="pagination-btn"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
