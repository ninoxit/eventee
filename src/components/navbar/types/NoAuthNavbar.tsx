export default function NoAuthNavbar(){
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
                <div className="d-flex">
                    <a href="/signup">
                        <button className="btn btn-outline-success rounded-pill me-2" type="submit">
                            Unirse ahora
                        </button>
                    </a>
                    <a href="/login">
                        <button className="btn btn-outline-primary rounded-pill" type="submit">
                            Iniciar sesión
                        </button>
                    </a>
                </div>
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
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </>
    )
}