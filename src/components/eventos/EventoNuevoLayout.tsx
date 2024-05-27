import FooterContainer from "../home/FootContainer";
import BasicLayout from "../layout/BasicLayout";
import Navbar from "../navbar/Navbar";
import EventoNuevoForm from "./nuevo/EventoNuevoForm";


export default function EventoNuevoLayout(){
    return(
        <>
            <Navbar></Navbar>
            <br />
            <BasicLayout>
                <EventoNuevoForm></EventoNuevoForm>                
            </BasicLayout>
            <br />
            <FooterContainer></FooterContainer>
        </>
    )
}