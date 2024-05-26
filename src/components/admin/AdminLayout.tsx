import Navbar from "../navbar/Navbar";
import BasicLayout from "../layout/BasicLayout";
export default function AdminLayout(){
    return(
        <>
            <Navbar></Navbar>
            <BasicLayout>
                <h1>Admin panel</h1>
            </BasicLayout>
        </>
    )
}