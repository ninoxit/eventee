import FooterContainer from "../home/FootContainer";
import Navbar from "../navbar/Navbar";

export default function FAQSLayout(){
    return(
        <>
            <Navbar></Navbar>
            <div className="container">
                <h1>FAQS</h1>
            </div>
            <FooterContainer></FooterContainer>
        </>
    )
}