import { createFileRoute } from '@tanstack/react-router';
import EventosLayout from '../../components/eventos/EventosLayout';
import EventosLayoutAuth from '../../components/eventos/EventosLayoutAuth';

var _component = "";
var _context;
export const Route = createFileRoute('/eventos/')({
  beforeLoad: ({context})=> {
    if (context.auth.auth) {
      _component = "auth";
      _context = context.auth;
    } else {
      _component = "non";
    }
  },
  component: () => {
    if (_component == "auth") {
      return <EventosLayoutAuth auth={_context} />;
    } else {
      return <EventosLayout />;
    }
  }
});
