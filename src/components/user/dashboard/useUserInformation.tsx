import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/supabase";

export default function useUserInformation(email) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!email) {
                setLoading(false);
                return;
            }

            try {
                const { data, error } = await supabase
                    .from('usuario')
                    .select('id, name, lastname, telephone, email, username, bio')
                    .eq('email', email);

                if (error) throw error;
                
                if (data.length === 1) {
                    setUserData(data[0]);
                } else {
                    setError('No se encontró el usuario o se encontró más de uno con el mismo email.');
                    setUserData(null);
                }
            } catch (error) {
                setError(error.message);
                console.error('Error fetching user data:', error.message);
                setUserData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [email]);

    return { userData, loading, error };
}
