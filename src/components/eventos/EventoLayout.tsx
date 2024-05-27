import FooterContainer from "../home/FootContainer";
import BasicLayout from "../layout/BasicLayout";
import Navbar from "../navbar/Navbar";
import Evento from "./evento/Evento";
export default function EventoLayout(props){
    var id = props.id;
    return(
        <>
            <Navbar></Navbar>
            <BasicLayout>
                <br />
                <Evento id={id}></Evento>
            </BasicLayout>
            <FooterContainer></FooterContainer>
        </>
    );
}