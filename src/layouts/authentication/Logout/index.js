import {setLoginAuth} from "context";
import Login from '../Login';
function Logout() {
    localStorage.removeItem("LoginAuth")
    return(
        <>
        <Login/>
        </>
    )
}

export default Logout