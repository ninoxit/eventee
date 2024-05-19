import { supabase } from "../../supabase/supabase";

export default async function IsNicknameTaken(nickname: string) {
    try {
        const { data: usuario, error } = await supabase
            .from('usuario')
            .select('nickname')
            .eq('nickname', nickname);

        if (error) {
            throw error;
        }

        return usuario && usuario.length > 0;
    } catch (error) {
        console.error("Error al verificar el nickname:", error.message);
        return false;
    }
}
