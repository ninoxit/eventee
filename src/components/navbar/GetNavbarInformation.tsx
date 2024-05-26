import { useEffect, useState } from "react";
import IsUserProfileComplete from "../user/IsUserProfileComplete";
import { GetData } from "./GetData";


export default function GetNavbarInformation(email: string) {
    const [userData, setUserData] = useState<{ name: string | null, username: string | null }>({ name: null, username: null });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const isProfileComplete = await IsUserProfileComplete(email);
                if (isProfileComplete && email != null) {
                    const fetchedUserData = await GetData(email);
                    if (fetchedUserData) {
                        setUserData(fetchedUserData);
                    }
                }
            } catch (error) {
                console.error("Error al obtener la información del perfil:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [email]);

    if (isLoading) {
        return <i className="bi bi-arrow-clockwise"></i>;
    }

    return userData.username ? userData.username : "Perfil";
}
