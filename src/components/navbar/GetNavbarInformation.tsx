import { useEffect, useState } from "react";
import IsUserProfileComplete from "../user/IsUserProfileComplete";
import { GetNickname } from "./GetNickname";

export default function GetNavbarInformation(email: string) {
    const [nickname, setNickname] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const isProfileComplete = await IsUserProfileComplete(email);
                if (isProfileComplete && email != null) {
                    const fetchedNickname = await GetNickname(email);
                    setNickname(fetchedNickname);
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
    // console.log("Nickname getnavbar: " + nickname);
    return nickname ? nickname : "Perfil";
}
