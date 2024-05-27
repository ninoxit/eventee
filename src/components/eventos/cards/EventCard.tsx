import React from 'react';

const EventCard = ({ evento }) => {
  
  return (
    <>
      <div className="card shadow-lg rounded" style={{ width: "18rem", height: "300px" }}>
        <div className="card-body">
          <h5 className="card-title">{evento.event_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{evento.event_category}</h6>
          <p className="card-text" style={{ minHeight: "50px" }}>{evento.event_description}</p>
          <p className="card-text">
            <i className="bi bi-calendar"></i>
            {evento.daysToEvent === 0 ? (
              <span className="text-primary"> Hoy</span>
            ) : evento.daysToEvent < 0 ? (
              <span className="text-danger"> Evento pasado</span>
            ) : (
              <span> {evento.daysToEvent} días restantes</span>
            )}
          </p>
          <hr />
          <p className="card-text">
            <i className="bi bi-person"></i>
            {evento.usuario ? (
              <span>{evento.usuario.username}</span>
            ) : (
              <span>Sin autor</span>
            )}
          </p>
          <p>
            <a href={`/eventos/${evento.id}`}>
              <button className='btn btn-primary btn-block rounded-pill'>Ver evento</button>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default EventCard;