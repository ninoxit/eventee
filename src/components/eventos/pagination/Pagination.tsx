const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <nav aria-label="Page navigation example" style={{ marginTop: "20px" }}>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Anterior</button>
        </li>
        <li className="page-item active">
          <button className="page-link">{currentPage}</button>
        </li>
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Siguiente</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;