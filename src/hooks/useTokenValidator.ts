import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sign_out } from "../redux/features/auth-slice";
import danoneApi from "../api/danoneApi";
import { User, UserLogin } from "../interfaces/auth";
import { RootState } from "../redux/root-reducer";

interface Config {
  headers: object;
}

const config: Config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    fetchOptions: {
      mode: "no-cors",
    },
  },
};

export const useTokenValidator = () => {
  const dispatch = useDispatch();
  const { user: userData }: { user: User } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (!userData?.token) return;

    const interval = setInterval(async () => {
      try {
        const body = {
          token: userData.token,
        };

        const { data } = await danoneApi.post("/valida-token", body, config);

        if (data?.res === false) {
          console.warn("Token inválido, cerrando sesión...");
          dispatch(sign_out());
        }
      } catch (error) {
        console.error("Error validando token:", error);
      }
    }, 5 * 60 * 1000); // Cada 5 minutos

    return () => clearInterval(interval);
  }, [userData?.token, dispatch]);
};
