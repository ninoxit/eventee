import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import CompleteProfileForm from "./CompleteProfileForm";
import IsUserProfileComplete from "./IsUserProfileComplete";

function UserLayout(props) {
    const [isProfileComplete, setIsProfileComplete] = useState(null); // Estado para manejar el resultado
    const user_email = props.auth.user.email;
    useEffect(() => {
        const checkProfileComplete = async () => {
            const result = await IsUserProfileComplete(user_email);
            setIsProfileComplete(result);
        };
        checkProfileComplete();
    }, [user_email]);

    const renderHelper = (email) => {
        if (isProfileComplete === null) {
            return <p>Loading...</p>;
        }
        if (!isProfileComplete) {
            return <CompleteProfileForm email={email} />;
        } else {
            return <h1>Perfil completo, mostrando información</h1>;
        }
    };

    return (
        <>
            <Navbar email={user_email}/>
        </>
    );
}

export default UserLayout;
