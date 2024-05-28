import React, { useState, useEffect } from 'react';
import Navbar from "../navbar/Navbar"
import FooterContainer from "../home/FootContainer"
import BasicLayout from "../layout/BasicLayout"
import GetEventos from "./GetEventos";
import SearchBar from "./search/SearchBar";
import EventCard from "./cards/EventCard";
import Pagination from "./pagination/Pagination";
import MapComponent from '../map/MapComponent';
import ButtonPanel from './controls/ButtonPanel';

export default function EventosLayoutAuth(props){
  const user = props.props.auth.user;
  props.props.user.email
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    GetEventos().then((data) => {
      const updatedData = data.map((evento) => {
        const today = new Date();
        const eventDate = new Date(evento.event_date);
        const diffInDays = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
        return { ...evento, daysToEvent: diffInDays };
      });
      setEventos(updatedData);
      setLoading(false);
    }).catch((error) => {
      console.error(error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const filteredEvents = eventos.filter((evento) => {
    return (
      evento.event_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.event_category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.event_description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastEvent = currentPage * pageSize;
  const indexOfFirstEvent = indexOfLastEvent - pageSize;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(filteredEvents.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log("!!!!!!!")
  console.log(user)
  return (
    <>
      <Navbar props={props}></Navbar>
      <br /><br /><br />
      <div className='event-panel'>
        <div className="search-panel">
          <h1 className="text-center search-panel-title">¿Que estás buscando?</h1>  
          <div className="search-bar-container">
            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
          </div>
          <div className="row search-filter-container text-center">
            <div className="col-sm-2">
             <div className="circular-div eventos-personal">
              <i className="bi bi-person-arms-up"></i>
             </div>
             <p className="circular-div-title">Mis eventos</p>
            </div>
            <div className="col-sm-2">
              <div className="circular-div eventos-todos">
                <i className="bi bi-emoji-laughing"></i>
              </div>
              <p className="circular-div-title">Todos</p>
            </div>
            <div className="col-sm-2">
              <div className="circular-div eventos-fiestas">
                <i className="bi bi-balloon"></i>
              </div>
              <p className="circular-div-title">Fiestas</p>
            </div>
            <div className="col-sm-2">
              <div className="circular-div eventos-compromisos">
                <i className="bi bi-balloon-heart-fill"></i>
              </div>
              <p className="circular-div-title">Compromisos</p>
            </div>
            <div className="col-sm-2">
              <div className="circular-div eventos-reuniones">
                <i className="bi bi-building"></i>
              </div>
              <p className="circular-div-title">Reuniones</p>
            </div>
            <div className="col-sm-2">
              <div className="circular-div eventos-mas">
                <i className="bi bi-three-dots"></i>
              </div>
              <p className="circular-div-title">Más</p>
            </div>
          </div>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem"}}>
          {currentEvents.map((evento) => (
            <EventCard evento={evento} key={evento.id} />
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
      <FooterContainer></FooterContainer>
    </>
  );
}