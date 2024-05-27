import { createFileRoute } from '@tanstack/react-router';
import EventosLayout from '../../components/eventos/EventosLayout';
import EventosLayoutAuth from '../../components/eventos/EventosLayoutAuth';

var _component = "";
export const Route = createFileRoute('/eventos/')({
  beforeLoad: ({context})=> {
    if (context.auth.auth) {
      _component = "auth";
    } else {
      _component = "non";
    }
  },
  component: () => {
    if (_component == "auth") {
      return <EventosLayoutAuth />;
    } else {
      return <EventosLayout />;
    }
  }
});
