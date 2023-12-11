import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }
    return children;
};


export default ProtectedRoutes;