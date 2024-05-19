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
                    .select('name, lastname, telephone, email, username, bio')
                    .eq('email', email)
                    .single();

                if (error) throw error;
                setUserData(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching user data:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [email]);
    return { userData, loading, error };
}
