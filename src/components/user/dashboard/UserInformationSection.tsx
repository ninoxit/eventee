import UserInformationForm from "./UserInformationForm";

export default function UserInformationSection(props){
    var data = props.userdata;
    return(
        <>
            <div className="col-sm-12 col-md-8 bg-light p-4">
                <h1>Información de perfil</h1>
                <UserInformationForm email={props.email} userdata={data}></UserInformationForm>
            </div>
        </>
    )
}