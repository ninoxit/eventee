import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useAuth } from "../context/AuthProvider";
import { createRootRouteWithContext } from '@tanstack/react-router';

interface MyRouterContext {
    auth: {
        auth: boolean;
        user: any; 
        login: (email: string, password: string) => Promise<void>;
        signOut: () => Promise<void>;
        passwordReset: (email: string) => Promise<void>;
        updatePassword: (updatedPassword: string) => Promise<void>;
    };
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    component: () => {
      const { auth } = useAuth(); 
      return <Outlet />;
    },
  });