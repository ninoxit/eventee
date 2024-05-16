import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './App.css'
import './styles/App.less'

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register{
    router: typeof router;
  }
}
function App() {
  return(
    <RouterProvider router={router}/>
  );
}

export default App
