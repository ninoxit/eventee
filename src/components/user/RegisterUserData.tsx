import { supabase } from "../../supabase/supabase";

export default async function RegisterUserData(data: { firstName: string, lastName: string, phone: string, nickname: string, email: string }) {
    try {
        const { error } = await supabase
            .from('usuario')
            .insert([
                {
                    name: data.firstName,
                    lastname: data.lastName,
                    telephone: data.phone,
                    username: data.nickname,
                    email: data.email
                }
            ]);

        if (error) {
            throw error;
        }

        console.log("Usuario registrado exitosamente");
    } catch (error) {
        console.error("Error al registrar usuario:", error.message);
    }
}
