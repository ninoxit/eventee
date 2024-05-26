export default function LoggedInDropdown(props){
    var info = props.info;
    return(
        <>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://bpzhrnohprgmwxqrdyow.supabase.co/storage/v1/object/public/profile_pics/danielaivettenavamiranda.jpg"
                width={"30"} 
                className="rounded-circle"
                alt="" /> {info}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                    
                    <li>
                    <a className="dropdown-item" href="#"><i className="bi bi-calendar2-event"></i> Mis eventos</a>
                    </li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-person-circle"></i> Mi perfil</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> Configuraciones</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#" onClick={signOutUser}>
                    <i className="bi bi-box-arrow-right text-danger"></i> Cerrar sesión</a>
                    </li>
                </ul>
                </li>
            </ul>
        </>
    )
}