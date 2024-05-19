import { createFileRoute, redirect } from '@tanstack/react-router';
import LoginLayout from '../../components/login/LoginLayout';
import { useAuth } from '../../context/AuthProvider';
import AuthComponent from '../../components/auth/AuthComponent';

export const Route = createFileRoute('/login/')({
  component: () => {
    const { auth } = useAuth(); 
    if (auth) {
      console.log("Hello I'm falling here");
      return <AuthComponent origin="login" />
    }else{
      return <LoginLayout />;
    }
  }
});
