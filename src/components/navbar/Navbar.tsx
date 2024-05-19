import GetNavbarInformation from "./GetNavbarInformation";

export default function Navbar(props){
    var info = GetNavbarInformation(props.email);
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
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
                    <a className="nav-link nav-link-grow-up" href="#">Eventos</a>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {info}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#"><i className="bi bi-calendar2-event"></i> Mis eventos</a>
                      </li>
                      <li><a className="dropdown-item" href="#"><i className="bi bi-person-circle"></i> Mi perfil</a></li>
                      <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> Configuraciones</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">
                        <i className="bi bi-box-arrow-right text-danger"></i> Cerrar sesión</a>
                      </li>
                    </ul>
                  </li>
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
                      <a className="nav-link" href="#">Eventos</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Perfil
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#"><i className="bi bi-calendar2-event"></i> Mis eventos</a>
                        </li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-circle"></i> Mi perfil</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> Configuraciones</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">
                          <i className="bi bi-box-arrow-right text-danger"></i> Cerrar sesión</a>
                        </li>
                    </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </>
    );
}