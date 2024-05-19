import { createFileRoute, redirect } from '@tanstack/react-router';
import LoginLayout from '../../components/login/LoginLayout';

export const Route = createFileRoute('/login/')({
  /* 
  Revisamos si el usuario tiene una sesión activa y si se cumple la premisa
  redireccionamos a su perfil.
  */
  beforeLoad:({context}) => {
    if(context.auth.auth){
      throw redirect({
        to: '/user',
      })
    }
  },
  component: LoginLayout
});

