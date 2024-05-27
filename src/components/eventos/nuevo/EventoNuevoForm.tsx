import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

export default function EventoNuevoForm() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [form, setForm] = useState({
    event_name: '',
    event_category: '',
    event_description: '',
    event_date: '',
    event_max_participants: '',
    event_long_description: '',
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleMarkdownChange = (newValue) => {
    setValue(newValue);
    setForm({
      ...form,
      event_long_description: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nom: form.event_name,
      categoria: form.event_category,
      descripcio_curta: form.event_description,
      data: form.event_date,
      participants_maxims: form.event_max_participants,
      descripcio_llarga: form.event_long_description,
    });
  };

  return (
    <>
        <h1>¿Listo para publicar tu evento?</h1>
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
        <div className="form-group">
            <label htmlFor="event_name">Nombre del evento</label>
            <input
            type="text"
            className="form-control"
            id="event_name"
            name="event_name"
            value={form.event_name}
            onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="event_category">Categoría del evento</label>
            <input
            type="text"
            className="form-control"
            id="event_category"
            name="event_category"
            value={form.event_category}
            onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="event_description">Descripción del evento</label>
            <input
            type="text"
            className="form-control"
            id="event_description"
            name="event_description"
            value={form.event_description}
            onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="event_long_description">Descripción larga del evento</label>
            <MDEditor
            value={value}
            onChange={handleMarkdownChange}
            name="event_long_description"
            previewTheme="github-dark"
            theme="light"
            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
        <div className="row mt-4">
            <div className="col-sm-12 col-md-6">
                <div className="form-group">
                    <label htmlFor="event_date">Fecha del evento</label>
                    <input
                    type="date"
                    className="form-control"
                    id="event_date"
                    name="event_date"
                    value={form.event_date}
                    onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="form-group">
                    <label htmlFor="event_max_participants">Número máximo de participantes</label>
                    <input
                    type="number"
                    className="form-control"
                    id="event_max_participants"
                    name="event_max_participants"
                    value={form.event_max_participants}
                    onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
        <div className="form-group mt-4">
            <button type="submit" className="btn btn-primary">Crear evento</button>
        </div>
        </form>
    </>
  );
}