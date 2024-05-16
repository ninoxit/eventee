export default function FooterContainer(){
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="informacion">
                        <h2>Información Adicional</h2>
                            <ul>
                                <li><a href="/nosotros">Misión</a></li>
                                <li><a href="/nosotros">Visión</a></li>
                                <li><a href="/nosotros">Quiénes Somos</a></li>
                                <li><a href="/nosotros">Equipo</a></li>
                                <li><a href="/nosotros">Compromisos</a></li>
                            </ul>
                    </div>
                    <div className="partners">
                        <h2>Partners</h2>
                        <h3>Figma</h3>
                        <h3>Node.js</h3>
                        <h3>Fedex</h3>
                        <h3>Burger King</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}