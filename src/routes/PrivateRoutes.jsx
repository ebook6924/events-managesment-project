import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpainer from "../componets/LoadingSpainer";


const PrivateRoutes = ({children}) => {
    const {user ,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <LoadingSpainer></LoadingSpainer>
    }
    
    if(user){
        return children ;
    }
    
    return (
        <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
    );
};

export default PrivateRoutes;