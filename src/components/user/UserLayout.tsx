import React from "react";
import BetaSection from "../beta/BetaSection";
import BasicLayout from "../layout/BasicLayout";
import Navbar from "../navbar/Navbar";
import Title from "../document/Title";
import UserInformationSection from "./dashboard/UserInformationSection";
import UserPictureSection from "./dashboard/UserPictureSection";
import useUserInformation from "./dashboard/useUserInformation";
import FooterContainer from "../home/FootContainer";

export default function UserLayout(props) {
    
    var user_email = props.props.user.email || null;
    const { userData, loading, error } = useUserInformation(user_email);
    let message = "";

    if (loading) {
        return (
            <>
                <Title title="Perfil" />
                <Navbar props={props} showProfilePart="true" />
                <BasicLayout>
                    <p>Loading...</p>
                </BasicLayout>
            </>
        );
    }

    if (userData == null) {
        message = "Te damos la bienvenida a tu nueva cuenta";
    } else {
        message = userData.name.split(" ")[0];
    }
    
    return (
        <>
            <Navbar props={props}></Navbar>
            <Title title="Perfil" />
            
            <div style={{ marginTop: "4rem", paddingTop: "1rem" }}>
                <BasicLayout>
                    <h6>Bienvenida, <strong>{message}</strong>.</h6>
                    <div className="row shadow">
                        <UserPictureSection />
                        <UserInformationSection email={user_email} userdata={userData} />
                    </div>
                    {userData && (
                        <div className="row">
                            <BetaSection id={userData.id} />
                        </div>
                    )}
                </BasicLayout>
                <FooterContainer></FooterContainer>
            </div>
        </>
    );
}