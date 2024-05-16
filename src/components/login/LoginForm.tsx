export default function LoginForm () {
    return(
        <>
        <div className="container">
            <form style={{width: "300px"}}>
                <div className="form-group">
                    <h3>
                        Iniciar sesión
                    </h3>
                </div>
                <div className="form-group">
                    <input type="email" name = "Email" placeholder="*email" className="form-control" />
                </div>
                <div className="form-group">
                <input type="password" name = "Password" placeholder="*contraseña" className="form-control mt-4" />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6">
                            <label >
                            <input type="checkbox" name="keepSession" id="" /> Recordar sesion
                            </label>
                        </div>
                        <div className="col">
                            <a href="enlace">
                                ¿olvidó la contraseña?
                            </a>
                        </div>
                    </div>
                </div>
                <div className="form-group mt-4">
                    <button className="btn btn-primary" >
                        Entrar 
                    </button>
                </div>
            </form>
        </div>

        </>

    )
}