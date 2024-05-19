import { supabase } from "../../supabase/supabase";

export default async function IsUserProfileComplete(email: string) {
    try {
        const { data: usuario, error } = await supabase
            .from('usuario')
            .select('*')
            .eq('email', email); 

        if (error) {
            throw error;
        }

        if (usuario && usuario.length > 0) {
            // console.log("Perfil del usuario:", usuario[0]);
            return true; 
        } else {
            console.log("No se encontró el usuario con el email proporcionado.");
            return false;
        }
    } catch (error) {
        console.error("Error al verificar el perfil del usuario:", error.message);
        return false;
    }
}
