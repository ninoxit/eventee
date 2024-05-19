import BetaSection from "../beta/BetaSection";
import BasicLayout from "../layout/BasicLayout";
import Navbar from "../navbar/Navbar";
import UserInformationSection from "./dashboard/UserInformationSection";
import UserPictureSection from "./dashboard/UserPictureSection";
import useUserInformation from "./dashboard/useUserInformation";

function UserLayout(props) {
    const user_email = props.auth.user.email || "";
    const { userData, loading, error } = useUserInformation(user_email);

    if (loading) {
        return (
            <>
                <Navbar email={user_email} />
                <BasicLayout>
                    <p>Loading...</p>
                </BasicLayout>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar email={user_email} />
                <BasicLayout>
                    <p>Error: {error}</p>
                </BasicLayout>
            </>
        );
    }

    return (
        <>
            <Navbar email={user_email} />
            <BasicLayout>
                <h6>Bienvenida, <strong>{userData.name.split(" ")[0]}</strong>.</h6>
                <div className="row shadow">
                    <UserInformationSection email={user_email} userdata={userData} />
                    <UserPictureSection></UserPictureSection>
                </div>
                <div className="row">
                    <BetaSection></BetaSection>
                </div>
            </BasicLayout>
        </>
    );
}

export default UserLayout;
