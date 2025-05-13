/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { useDanone } from "../../../hooks/useDanone";
import { useRef, useState } from "react";
import { ProgressButton } from "../progress/ProgressButton";
import { initialValues, loginSchema } from "./loginFormConfig";
import {
  createTheme,
  TextField,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { FormValuesLogin } from "../../../interfaces/registerForm";
import Swal from "sweetalert2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fccc07",
    },
    secondary: {
      main: "#fccc07",
    },
  },
});

export const LoginForm = () => {
  const { login, recuperarClave } = useDanone();
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  const btnClose = useRef(null);
  const [loader, setLoader] = useState(false);
  const [loaderRecuperar, setLoaderRecuperar] = useState(false);
  const [emailRecuperar, setEmailRecuperar] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailRecuperar(e.target.value);
  };

  const handleClickRecuperar = async () => {
    if (emailRecuperar == "") {
      Swal.fire({
        title: "Email vacío",
        text: "Debes ingresar tu email",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return null;
    }
    setLoaderRecuperar(true);
    const rep = await recuperarClave({ email: emailRecuperar });
    if (rep) {
      setEmailRecuperar("");
      if (btnClose.current) (btnClose.current as HTMLElement | null)?.click();
    }
    setLoaderRecuperar(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoader(true);

        const user: FormValuesLogin = {
          email: values.email,
        };
        const { resp }: any = await login(user);

        if (resp) resetForm();
        setLoader(false);
      } catch (error) {
        setLoader(false);
      }
    },
  });

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    formik;

  return (
    <ThemeProvider theme={theme}>
      <form
        onSubmit={handleSubmit}
        className="form-register container mt-20 mb-20"
      >
        <div className="mb-30">
          <div className="row mx-0 mb-15 p-0 w-100">
            {/* <div className="col-12">
              <p
                className="h4 fw-bold text-justify mb-30"
                style={{ textAlign: "justify" }}
              >
                Banco Azteca tiene el honor de invitarte a la ponencia virtual
                con Chetna Gala Sinha, una de las empresarias sociales más
                influyentes del mundo de las últimas dos décadas.
              </p>
            </div> */}
            <div className="col-12 mb-10 d-flex align-items-center justify-content-center">
              <span
                className="label-title-lg "
                style={{
                  backgroundColor: "var(--tp-theme-2)",
                  color: "var(--tp-common-white)",
                  fontWeight: "bold",
                }}
              >
                Iniciar Sesión
              </span>
            </div>
            <div className="co-12 mt-10">
              <TextField
                className="w-100"
                label="Correo Electrónico"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                name="email"
                type="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ color: "#fff" }}
              />
            </div>

            <div
              className={`co-12 d-flex align-items-end justify-content-center ${
                movilIpadaScreen ? "mt-30" : "mt-10"
              } `}
            >
              {loader ? (
                <ProgressButton />
              ) : (
                <>
                  <button
                    className="btn-secondary-sm fw-bold"
                    type="submit"
                    aria-label="Iniciar sesión"
                  >
                    ENVIAR
                  </button>
                </>
              )}
            </div>
            {/* <div className="col-xxl-12 col-xl-12 col-lg-12 col-12 col-md-12 mt-10 d-flex align-items-center justify-content-center">
              <span className="text-black mr-2 d-inline-flex gap-1 flex-column text-center">
                Recupera tu clave
                <button
                  type="button"
                  className="ml-2 d-inline-flex"
                  style={{ color: "var(--tp-theme-1)" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  haciendo clic aquí
                </button>
              </span>
            </div> */}
          </div>
        </div>
      </form>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-black" id="exampleModalLabel">
                Recuperar clave
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={btnClose}
              ></button>
            </div>
            <div className="modal-body">
              <TextField
                className="w-100"
                label="Email"
                variant="outlined"
                value={emailRecuperar}
                onChange={handleChangeEmail}
                id="emailRecuperar"
                name="emailRecuperar"
                type="email"
              />
              <div className="w-100">
                {loaderRecuperar ? (
                  <div className="mt-10">
                    <ProgressButton />
                  </div>
                ) : (
                  <>
                    <button
                      className="btn-secondary-md fw-bold text-white mt-20"
                      type="button"
                      aria-label="Iniciar sesión"
                      onClick={handleClickRecuperar}
                    >
                      Recuperar
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
