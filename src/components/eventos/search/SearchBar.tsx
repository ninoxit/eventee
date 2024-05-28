import React from 'react';

export default function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="search-bar-container">
      <div className="input-group mb-3">
        <span className="input-group-text bg-white border-0" 
        id="search-icon"
        style={{borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px"}}>
          <strong>
            <i className="bi bi-search"></i>
          </strong>
        </span>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar eventos"
          className="form-control rounded-start border-0"
          aria-label="Buscar eventos"
          aria-describedby="search-icon"
          style={{ borderRadius: '50px', outline: "none", boxShadow: "none" }}
        />
      </div>
    </div>
  );
}