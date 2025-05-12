import { Navigate, Route, Routes } from "react-router-dom";
import { Live } from "../screens/live/Live";

import { Agenda } from "../screens/agenda/Agenda";
import { Ponentes } from "../screens/ponentes/Ponentes";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Live />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/ponentes" element={<Ponentes />} />
      <Route path="/en-vivo" element={<Live />} />
      <Route path="*" element={<Navigate to="/en-vivo" replace />} />
    </Routes>
  );
};
