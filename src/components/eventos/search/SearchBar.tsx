import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search-bar-container">
      <div className="input-group mb-3">
        <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Buscar eventos" className="form-control" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;