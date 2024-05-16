export default function RecoveryForm(props){
    return(
        <>
        <div className="container">
            <form style={{width : "300px"}}>
                <div className="form-group">
                    <h3>
                        Recuperar cuenta
                    </h3>
                    <div className="form-group">
                    <input type="email" name = "Email" placeholder="*Ingrese email" className="form-control" />
                </div>
                </div>
                <div className="form-group mt-4">
                    <button className="btn btn-primary" >
                        Enviar OTP 
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}