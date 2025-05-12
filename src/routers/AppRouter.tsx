import { BrowserRouter as Router } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { PublicRoutes } from "./PublicRoutest";
import { PrivateRoutes } from "./PrivateRoutes";
import { accessLogin } from "../settings";

const AppRouter = () => {
  const { userData, isLoadingUser } = useUser();

  if (isLoadingUser) {
    return <p>Cargando...</p>;
  }

  if (!accessLogin)
    return (
      <Router>
        <PublicRoutes />
      </Router>
    );

  return (
    <Router>{userData.email ? <PrivateRoutes /> : <PublicRoutes />}</Router>
  );
};

export default AppRouter;
