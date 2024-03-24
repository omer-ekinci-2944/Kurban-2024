import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../config/firebase";

const AdminLayout = () => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/mlk/sign-in" replace />;
  }

  return <Outlet />;
};

export default AdminLayout;
