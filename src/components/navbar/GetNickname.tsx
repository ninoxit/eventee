import { supabase } from "../../supabase/supabase";

export async function GetNickname(email: string) {
    try {
        const { data: usuario, error } = await supabase
            .from('usuario')
            .select('username')
            .eq('email', email)
            .single();

        if (error) {
            throw error;
        }

        if (usuario) {
            return usuario.username;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el nickname:", error.message);
        return null;
    }
}
