export default function FooterContainer(){
    var links = {
        instagram: "https://www.instagram.com/eventeebase?igsh=MWJ2c3I3MG43dXd1Zg==",
    }
    return(
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                    </div>
                    <div>
                    <a href="#" className="me-4 text-reset">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a  href={`${links.instagram}`} className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                    </div>
                </section>
                <section>
                    <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3"></i> <strong>Eventee</strong>
                        </h6>
                        <p>
                            
                        </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Enlaces
                        </h6>
                            <p>
                                <a href="#!" className="text-reset">FAQ's</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Blog</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Status</a>
                            </p>
                            <p>
                                <a href="/nosotros" className="text-reset">Nuestro equipo</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Redes sociales
                        </h6>
                        <p>
                            <a href="#!" className="text-reset">Instagram</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">GitHub</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Orders</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Help</a>
                        </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                        <p><i className="fas fa-home me-3"></i>Zapopan, Jalisco, México.</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            eventee@ninoxit.me
                        </p>
                        </div>
                    </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    <a className="text-reset fw-bold" href="#">
                        Powered by <strong>Ninoxit</strong>
                    </a>
                </div>
                </footer>
        </>
    )
}