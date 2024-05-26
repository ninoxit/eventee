import LoginForm from "./LoginForm"
import Title from "../document/Title"
import "../../styles/Login.less"

export default function LoginLayout(){
    return (
        <>
            <Title title="Inicia sesión"></Title>
            <div className="login-layout-container">
                <div className="login-left-side">
                    <LoginForm></LoginForm>
                </div>
                <div className="login-right-side">
                    <div className="right-image-container">
                        <img 
                        className="right-side-mockup"
                        src="https://bpzhrnohprgmwxqrdyow.supabase.co/storage/v1/object/public/event_frontpage/e01ffde687a.png" 
                        alt="" />
                        <hr />
                        <h4 className="right-side-text">
                            Eventee
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}