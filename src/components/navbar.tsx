
export default function Navbar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Eventee</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Eventos</a>
        <a className="nav-link" href="#">Conciertos</a>
        <a className="nav-link" href="#">Bodas</a>
        <a className="nav-link" href="#">Reuniones</a>
        
      </div>
    </div>
  </div>
</nav>
        </>
    );
}