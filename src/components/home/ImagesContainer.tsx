export default function ImagesContainer(){

    return(
        <>
            <div className="contenedor-imagenes">
                <div className="imagenes">
                    <a href="bodas.html" className="img-link">
                        <img src="public/img/boda.jpeg" className="imagen" />
                        <span className="hover-text">Bodas</span>
                    </a>
                    <a href="cumpleaños.html" className="img-link">
                        <img src="public/img/cumple.png" className="imagen" />
                        <span className="hover-text">Cumpleaños</span>
                    </a>
                </div>
                <div className="imagenes">
                    <a href="reuniones.html" className="img-link">
                        <img src="public/img/reunion.jpeg" className="imagen" />
                        <span className="hover-text">Reuniones</span>
                    </a>
                        <a href="pagina4.html" className="img-link">
                        <img src="/public/img/concierto.jpeg" alt="Imagen 4" className="imagen" />
                        <span className="hover-text">Fiestas</span>
                    </a>
                </div>
            </div>
        </>
    )
}