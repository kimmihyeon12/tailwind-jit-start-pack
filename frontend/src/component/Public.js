import { Navigate } from "react-router-dom";

function Public({ user = null, restricted = false, children }) {
  return user && restricted ? <Navigate to="/select" /> : <>{children}</>;
}

export default Public;
