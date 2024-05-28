import Title from "../document/Title";
import Navbar from "../navbar/Navbar";
export default function HomeLayout(props){
    return(
        <>
            <Title title="Eventee"></Title>
            <Navbar props={props}></Navbar>
        </>
    )
}