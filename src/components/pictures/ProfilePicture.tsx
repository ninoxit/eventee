import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase';


async function getImageUrl(name:string) {
    var  initial = Array.from(name.name)[0];
    initial = initial.toUpperCase();
    
    console.log(initial)
    const fileName = `${initial}.png`;
    const bucketName = 'profile_pics'; 

    const { data, error } = await supabase
        .storage
        .from(bucketName)
        .getPublicUrl(fileName);

    if (error) {
        console.error('Error obteniendo la URL de la imagen:', error.message);
        return null;
    }

    return data.publicUrl;
}

export default function ProfilePicture(name: any) {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImageUrl = async () => {
            setLoading(true);
            const url = await getImageUrl(name);
            if (url) {
                setImageUrl(url);
                setError(null);
            } else {
                setError('No se pudo obtener la URL de la imagen');
            }
            setLoading(false);
        };

        fetchImageUrl();
    }, [name]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            {imageUrl ? <img src={imageUrl} alt={`Foto de perfil de ${name}`} className="rounded-circle" style={{width: "100%"}} /> : <p>No se encontró la imagen</p>}
        </>
    );
};