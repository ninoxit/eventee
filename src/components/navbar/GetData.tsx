import { supabase } from "../../supabase/supabase";

export async function GetData(email: string) {
    try {
        const { data: usuario, error } = await supabase
            .from('usuario')
            .select('name, username')
            .eq('email', email)
            .single();

        if (error) {
            throw error;
        }
        if (usuario) {
            return { name: usuario.name, username: usuario.username };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el nombre y el username:", error.message);
        return null;
    }
}
