import Navbar from "../navbar/Navbar"
import FooterContainer from "../home/FootContainer"
export default function EventosLayout(props){
    console.log("aaaaaaaaaaaaaa")
    console.log(props)
    return(
        <>
            <Navbar props={props}></Navbar>
            <FooterContainer></FooterContainer>
        </>
    )
}