import NotaTester from "./parts/NotaTester";
import useIsUserBetaTester from "./useIsUserBetaTester";

export default function BetaSection(props) {
    const id = props.id;
    const { isBetaTester, loading, error } = useIsUserBetaTester(id);

    const renderHelper = () => {
        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Error: {error}</p>;
        }

        if (!isBetaTester) {
            return <NotaTester></NotaTester>;
        }
        return null;
    };

    return (
        <div className="col-sm-12 col-md-12 mt-4 mb-4 beta-container">
            <h1>La beta ya está aquí.</h1>
            <hr className="hr hr-blurry"/>
            {renderHelper()}
        </div>
    );
}
