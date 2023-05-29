import { MaterialUIControllerProvider } from 'context';
import {setLoginAuth} from "context";
import Login from '../Login';
import { useMaterialUIController } from 'context';
function Logout() {
    sessionStorage.removeItem("LoginAuth")
    return(
        <>
        <Login/>
        </>
    )
}

export default Logout