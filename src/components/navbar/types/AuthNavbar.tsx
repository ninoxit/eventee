import handleSignOut from "../../auth/handleSignout";
import ProfilePicture from "../../pictures/ProfilePicture";
import GetNavbarInformation from "../GetNavbarInformation";
import { useEffect, useState } from "react";

export default function AuthNavbar(props){
    const [name, setName ] = useState();
    var info = GetNavbarInformation(props.email);
    const signOutUser = handleSignOut();
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light fixed-top shadow">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img 
                src="https://bpzhrnohprgmwxqrdyow.supabase.co/storage/v1/object/public/event_frontpage/eventee_icon_small.png?t=2024-05-28T00%3A21%3A30.142Z" 
                alt="" 
                style={{width: "30px", height: "auto"}}/>
                 <strong>Eventee</strong>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active nav-item nav-link-grow-up" aria-current="page" href="#">Home</a>

                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-grow-up" href="/eventos">Eventos</a>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <div className="d-flex align-items-center">
                  <li className="nav-item">
                    <button className="btn" style={{backgroundColor: "#C56FF2", color: "white"}}>
                      <i className="bi bi-plus-lg"></i> Crear evento
                    </button>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="image-place" style={{ width: "30px", marginRight: "10px" }}>
                        <ProfilePicture name={info} />
                      </div>
                      {info}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#"><i className="bi bi-calendar2-event"></i> Mis eventos</a>
                      </li>
                      <li><a className="dropdown-item" href="/user"><i className="bi bi-person-circle"></i> Mi perfil</a></li>
                      <li><a className="dropdown-item" href="#"><i className="bi bi-tools"></i> Administración</a></li>
                      <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> Configuraciones</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={signOutUser}>
                          <i className="bi bi-box-arrow-right text-danger"></i> Cerrar sesión
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>

                </ul>
              </div>
              <div className="offcanvas offcanvas-end d-lg-none" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Eventee</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/eventos">Eventos</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Perfil
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#"><i className="bi bi-calendar2-event"></i> Mis eventos</a>
                        </li>
                        <li><a className="dropdown-item" href="/user"><i className="bi bi-person-circle"></i> Mi perfil</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> Configuraciones</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <a className="dropdown-item" href="#" onClick={signOutUser}>
                            <i className="bi bi-box-arrow-right text-danger"></i> Cerrar sesión
                          </a>
                        </li>
                    </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </>
    )
}