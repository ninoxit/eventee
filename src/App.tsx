import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import AuthProvider from './context/AuthProvider'
import { useAuth } from './context/AuthProvider'; 

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

export default App;
