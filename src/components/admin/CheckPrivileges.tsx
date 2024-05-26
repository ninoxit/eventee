import { supabase } from "../../supabase/supabase";

export default async function CheckPrivileges(email: string) {
    try {
        const { data: usuario, error } = await supabase
            .from('usuario')
            .select('isStaff')
            .eq('email', email)
            .single(); // .single() asume que solo habrá un resultado, es más directo si esperamos un solo usuario

        if (error) {
            throw error;
        }

        if (usuario && usuario.isStaff) {
            return true;
        } else {
            console.log("El usuario no tiene privilegios de staff o no se encontró.");
            return false;
        }
    } catch (error) {
        console.error("Error al verificar los privilegios del usuario:", error.message);
        return false;
    }
}
