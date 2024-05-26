import { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase';

export default function useIsUserBetaTester(id) {
    const [isBetaTester, setIsBetaTester] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIsBetaTester = async () => {
            try {
                const { data: usuario, error } = await supabase
                    .from('beta_tester')
                    .select('*')
                    .eq('id_user', id);

                if (error) {
                    throw error;
                }

                setIsBetaTester(usuario && usuario.length > 0);
            } catch (error) {
                setError(error.message);
                console.error("Error en la búsqueda de beta tester: ", error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchIsBetaTester();
        } else {
            setLoading(false);
        }
    }, [id]);

    return { isBetaTester, loading, error };
}
