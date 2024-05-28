import AuthNavbar from "./types/AuthNavbar";
import NoAuthNavbar from "./types/NoAuthNavbar";


export default function Navbar(props){
    
    var auth = props.props.props.auth;    
    
    if(auth){
      var email = props.props.props.user.email;
      return <AuthNavbar email={email}></AuthNavbar>;
    }else{
      return <NoAuthNavbar></NoAuthNavbar>
    }
}