import React, { useState, useEffect } from "react";
import CountEvents from "./CountEvents";

export default function FilterByUser() {
  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {
    CountEvents().then(count => {
      setEventCount(count);
    });
  }, []);

  return (
    <>
      <div className="btn-group">
        <button type="button" className="btn btn-danger">
          <i className="bi bi-filter-circle-fill"></i> Filtrar
        </button>
        <button
          type="button"
          className="btn btn-danger dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <p className="dropdown-item">
              <strong>Creado por</strong>
            </p>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Mis eventos
                </label>
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Cualquiera{" "}
                  (<strong>{eventCount}</strong>)
                </label>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <p className="dropdown-item">
              <strong>Estatus</strong>
            </p>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Activos
                </label>
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Pasados
                </label>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}