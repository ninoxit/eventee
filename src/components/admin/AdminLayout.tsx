import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import BasicLayout from "../layout/BasicLayout";
import CheckPrivileges from "./CheckPrivileges";
function privilegeHelper(flag: boolean){
    if(flag){
        return(
            <>
                <h1>Panel de administración</h1>
            </>
        )
    }else{
        return(
            <>
                <h1 className="text-danger">No tienes permiso</h1>
            </>
        )
    }
}
export default function AdminLayout(props) {
    const user_email = props.auth.user.email || "";
    const [hasPrivileges, setHasPrivileges] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchPrivileges() {
            const privileges = await CheckPrivileges(user_email);
            setHasPrivileges(privileges);
            setLoading(false);
        }
        fetchPrivileges();
    }, [user_email]);
    console.log(hasPrivileges);

    

    return (
        <>
            <Navbar email={user_email} />
            <BasicLayout>
                <h1>Admin Panel</h1>
                { privilegeHelper(hasPrivileges) }
            </BasicLayout>
        </>
    );
}
