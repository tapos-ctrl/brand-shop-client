import PropTypes from "prop-types"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";


const PrivateRoute =  ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)



if(loading){
   return <div className="text-red-400 flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
}

if(user){

    return children
    
}

return <Navigate to="/login" state={location.pathname}/>


};

PrivateRoute.propTypes = {
  children: PropTypes.any
}

export default PrivateRoute;