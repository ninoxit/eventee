import Navbar from "../navbar/Navbar"
import FooterContainer from "../home/FootContainer"
export default function EventosLayout(){

    return(
        <>
            <Navbar></Navbar>
            <div className="container">
                <h1 style={{ textAlign: "center"}}>
                    Revisa los eventos que tenemos preparados para ti.
                    <form action="#">
                        <input type="text" placeholder="Bodas" style={{width:"100%"}}/>
                    </form>
                </h1>
                
            </div>
            <FooterContainer></FooterContainer>
        </>
    )
}