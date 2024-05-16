export default function VerifyForm(){
    return(
        <>
        <div className="container">
            <form style={{width: "300px"}}>
                <div className="form-group">
                    <h3>
                        Ingrese el código
                    </h3>
                </div>
                <div className="row">
                        <div className="col">
                            <input type="text" name = "number-a" placeholder="*" className="form-control" />
                        </div>
                        <div className="col">
                        <input type="text" name = "number-b" placeholder="*" className="form-control" />                        </div>
                        <div className="col">
                        <input type="text" name = "number-c" placeholder="*" className="form-control" />                        </div>
                        <div className="col">
                        <input type="text" name = "number-d" placeholder="*" className="form-control" />                        </div>
                        <div className="col">
                        <input type="text" name = "number-e" placeholder="*" className="form-control" />                        </div>
                    </div>
                    <div className="form-group mt-4">
                    <button className="btn btn-primary" >
                        Validar 
                    </button>
                </div>
                </form>
        </div>
        </>
    )
}