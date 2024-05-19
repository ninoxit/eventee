import { redirect } from "@tanstack/react-router";
import { useAuth } from "../../context/AuthProvider";


export default function handleSignOut() {
    const { signOut } = useAuth();
    const signOutUser = async () => {
        try {
            await signOut();
            throw redirect({
                to: '/login'
            })            
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return signOutUser;
}
