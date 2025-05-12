import { Navigate, Route, Routes } from "react-router-dom";
import { Register } from "../screens/register/Register";
// import { Home } from "../screens/home/Home";
// import { Agenda } from "../screens/agenda/Agenda";
// import { Ponentes } from "../screens/ponentes/Ponentes";
import { Login } from "../screens/login/Login";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/iniciar-sesion" element={<Login />} />
      {/*
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/ponentes" element={<Ponentes />} /> */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
