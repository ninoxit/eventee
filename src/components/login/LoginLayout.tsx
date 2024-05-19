import Navbar from "../navbar/Navbar"
import LoginForm from "./LoginForm"
import BasicLayout from "../layout/BasicLayout"
export default function LoginLayout(){
    return (
        <>
            <Navbar></Navbar>
            <BasicLayout>
                <LoginForm></LoginForm>
            </BasicLayout>
        </>
    )
}