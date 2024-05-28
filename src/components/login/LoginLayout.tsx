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
                        <h4 className="right-side-text">
                            Eventee
                        </h4>
                        <h5>
                            Simplificamos, tu disfrutas.
                            <br />
                            Eventos sin preocupaciones.
                        </h5>
                        <img 
                        className="right-side-mockup"
                        src="https://bpzhrnohprgmwxqrdyow.supabase.co/storage/v1/object/public/event_frontpage/loginform.png?t=2024-05-28T01%3A59%3A36.058Z" 
                        alt="" />
                        <p>
                            <a href="/eve" className="eve-link">
                                <i className="bi bi-arrow-right"></i> Conoce a <strong>Eve</strong>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}