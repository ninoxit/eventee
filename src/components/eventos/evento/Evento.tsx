import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import { supabase } from '../../../supabase/supabase';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Evento({ id }) {
  const [eventData, setEventData] = useState(null);
  const [value, onChange] = useState<Value>(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const { data: event, error } = await supabase
        .from('events')
        .select(`
          *,
          usuario:event_author(name, lastname, username)
        `)
        .eq('id', id)
        .single();
      if (error) {
        console.error('Error fetching event data:', error);
        return;
      }
      if (!event) {
        setEventData(null);
        return;
}
      setEventData(event);
    };
    fetchData();
  }, [id]);

  if (!eventData) {
    return <p>Loading...</p>;
  }

  if (!eventData) {
    return <p>Event not found</p>;
  }

  const createdAgo = (date) => {
    const now = new Date();
    const diffMs = (now - new Date(date)) / 1000;
    const diffDays = Math.floor(diffMs / 86400);
    if (diffDays === 0) {
      return 'hoy';
    } else if (diffDays === 1) {
      return 'ayer';
    } else {
      return `${diffDays} días atrás`;
    }
  }

  const tileClassName = ({ date }) => {
    if (date.getTime() === new Date(eventData.event_date).getTime()) {
      return 'selected-day';
    }
  };

  return (
    <>
      <div className="container bg-light rounded p-2 mb-4">
        <div className="row">
          <div className="col-md-6">
            <h4 className="card-title">{eventData.event_name}</h4>
            <hr />
            <h6 className="card-subtitle mb-2 text-muted">
              {eventData.event_category.split(',').map((category, index) => (
                <a href={`eventos/${category.trim()}`}>
                  <span key={index} className="badge bg-secondary me-1 rounded-pill">{category.trim()}</span>
                </a>
              ))}
            </h6>
            <p className="card-text">{eventData.event_description}</p>
            <p className="card-text">
              <small className="text-muted">{eventData.event_date}</small>
            </p>
          </div>
          <div className="col-md-6">
            <h5>Autor</h5>
            <p>{eventData.usuario.name} {eventData.usuario.lastname}</p>
            <p>@{eventData.usuario.username}</p>
            <p>
              <small>{createdAgo(eventData.created_at)}</small>
            </p>

            <Calendar
              onChange={onChange}
              value={value}
              tileClassName={tileClassName}
            />

          </div>
        </div>
      </div>
    </>
  );
}