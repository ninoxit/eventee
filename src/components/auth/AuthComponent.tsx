import { redirect } from "@tanstack/react-router";
export default function AuthComponent(props){
    var origin = props.origin;
    return(
        <>
            <div className="container">
                <a href="/user">
                    <button className="btn btn-primary">
                        Redireccionar a tu perfil
                    </button>
                </a>
            </div>
        </>
    )   
}