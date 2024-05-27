import { createFileRoute, useParams } from '@tanstack/react-router';
import EventoLayout from '../../components/eventos/EventoLayout';

export const Route = createFileRoute('/eventos/$id')({
  component: () => {
    const params = useParams();
    const id = params.id;

    return <EventoLayout id={id} />
  },
});