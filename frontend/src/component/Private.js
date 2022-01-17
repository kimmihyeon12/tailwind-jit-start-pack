import { Navigate } from "react-router-dom";

function Private({ user = null, children }) {
  return user ? <>{children}</> : <Navigate to="/" />;
}

export default Private;
