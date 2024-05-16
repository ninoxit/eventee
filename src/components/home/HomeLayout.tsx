import Navbar from "../Navbar";
import LogoContainer from "./LogoContainer";
import ImagesContainer from "./ImagesContainer";
import FooterContainer from "./FootContainer";
export default function HomeLayout(){
    return(
        <>
            <Navbar></Navbar>
            <LogoContainer></LogoContainer>
            <ImagesContainer></ImagesContainer>
            <FooterContainer></FooterContainer>
        </>
    )
}