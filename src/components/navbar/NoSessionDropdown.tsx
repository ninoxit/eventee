export default function NoSessionDropdown(){
    return(
        <>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://bpzhrnohprgmwxqrdyow.supabase.co/storage/v1/object/public/profile_pics/danielaivettenavamiranda.jpg"
                width={"30"} 
                className="rounded-circle"
                alt="" /> Comienza ahora
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                    
                    <li>
                    <a className="dropdown-item" href="#"><i className="bi bi-calendar2-event"></i> Mis eventos</a>
                    </li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-person-circle"></i> Mi perfil</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> Configuraciones</a></li>
                </ul>
                </li>
            </ul>
        </>
    )
}