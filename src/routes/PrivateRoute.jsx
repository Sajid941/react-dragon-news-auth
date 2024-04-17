import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    console.log(location)
    const { user, loading } = useContext(AuthContext)
    if (loading)
        return <div className="w-full h-screen flex justify-center items-center"><span className="loading  loading-spinner text-neutral"></span></div>

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={"/login"} />
}
export default PrivateRoute;