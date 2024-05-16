import Navbar from "../Navbar"
import FooterContainer from "../home/FootContainer"
import MisionContainer from "./MisionContainer"
import VisionContainer from "./VisionContainer"
import QuienesContainer from "./QuienesContainer"
import EquipoContainer from "./EquipoContainer"
import CompromisoContainer from "./CompromisosContainer"
export default function NosotrosLayout(){

    return(
        <>
            <Navbar></Navbar>
            <div className="container">
                <h1 className="title">Quienes somos:</h1>
                <MisionContainer></MisionContainer>
                <VisionContainer></VisionContainer>
                <QuienesContainer></QuienesContainer>
                <EquipoContainer></EquipoContainer>
                <CompromisoContainer></CompromisoContainer>
            </div>
            <FooterContainer></FooterContainer>
        </>
    )
}
