import { redirect } from "@tanstack/react-router";
import { useAuth } from "../../context/AuthProvider";

export default function useHandleSignOut() {
  const { signOut } = useAuth(); // Destructure the signOut function

  const handleSignOut = async () => {
    try {
      await signOut();
      return redirect({ to: '/login' });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return handleSignOut;
}