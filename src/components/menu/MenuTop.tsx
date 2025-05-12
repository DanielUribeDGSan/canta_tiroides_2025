import { NavLink, useLocation } from "react-router-dom";
import "./MenuTop.scss";
import { useUser } from "../../hooks/useUser";

interface Props {
  styleMenu?: React.CSSProperties | undefined;
  styleNav?: React.CSSProperties | undefined;
}
export const MenuTop = ({ styleMenu, styleNav }: Props) => {
  const location = useLocation();
  const { userData } = useUser();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="menuTop" style={styleMenu}>
      <ul>
        {!userData?.email ? (
          <>
            <li>
              <NavLink
                to="/"
                className={`text-black ${isActive("/") ? "active" : ""}`}
                style={styleNav}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/iniciar-sesion"
                className={`text-black ${
                  isActive("/iniciar-sesion") ? "active" : ""
                }`}
                style={styleNav}
              >
                Iniciar sesión
              </NavLink>
            </li>
            {/* 
            <li>
              <NavLink
                to="/registro"
                className={`text-black ${
                  isActive("/registro") ? "active" : ""
                }`}
                style={styleNav}
              >
                Registro
              </NavLink>
            </li> */}
          </>
        ) : (
          <li>
            <NavLink
              to="/en-vivo"
              className={`text-black ${isActive("/en-vivo") ? "active" : ""}`}
              style={styleNav}
            >
              En vivo
            </NavLink>
          </li>
        )}
        {/* <li>
          <NavLink
            to="/ponentes"
            className={`text-black ${isActive("/ponentes") ? "active" : ""}`}
            style={styleNav}
          >
            Ponentes
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink
            to="/agenda"
            className={`text-black ${isActive("/agenda") ? "active" : ""}`}
            style={styleNav}
          >
            Agenda
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};
