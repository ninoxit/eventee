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
  
  const user = props.auth.user;
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
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
      <Navbar email={user.email}></Navbar>
      <div style={{marginTop: "63px"}}>
        <BasicLayout>
          <h1>Eventos</h1>  
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
          <ButtonPanel></ButtonPanel>
          <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem"}}>
            {currentEvents.map((evento) => (
              <EventCard evento={evento} key={evento.id} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        </BasicLayout>
      </div>
      <FooterContainer></FooterContainer>
    </>
  );
}