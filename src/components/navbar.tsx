
export default function Navbar(){
    return (
        <>
            <div> 
                <nav className="menu">
                    <ul>
                    <li>
                        <a href="https://www.instagram.com/eventeebase/">
                            <img src="public/img/instagram.png" className="img_insta" alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#" id="open-login-form">
                            <img src="public/img/sesion.png" className="img_logo" alt="Logo" />
                        </a>
                    </li>
                    <li>
                        <a href="#" id="google-login">
                            <img src="public/img/google.png" className="img_logo" alt="Logo" />
                        </a>
                    </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}