/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { useDanone } from "../../../hooks/useDanone";
import { RegisterUser } from "../../../interfaces/RegisterUser";
import { useState } from "react";
import { ProgressButton } from "../progress/ProgressButton";
import { initialValues, loginSchema } from "./registerFormConfig";
import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006341",
    },
    secondary: {
      main: "#006341",
    },
  },
});

export const RegisterForm = () => {
  const { register } = useDanone();
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");
  const [loader, setLoader] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoader(true);

      const user: RegisterUser = {
        nombre: values.fullName,
        paterno: values.firstSurname,
        materno: values.secondSurname,
        institucion: values.company,
        cargo: values.post,
        email: values.email,
        telefono: values.phone,
      };
      const { resp }: any = await register(user);

      if (resp) resetForm();
      setLoader(false);
    },
  });

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    formik;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNums = value.replace(/[^0-9]/g, "");
    if (onlyNums.length <= 10) {
      formik.setFieldValue("phone", onlyNums);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit} className="form-register p-0 mt-20 mb-20">
        <div className="mb-30">
          <div className="row mx-0 mb-15 p-0 w-100">
            <div className="col-12">
              <p
                className="h4 fw-bold text-justify mb-30"
                style={{ textAlign: "justify" }}
              >
                Banco Azteca tiene el honor de invitarte a la ponencia virtual
                con Chetna Gala Sinha, una de las empresarias sociales más
                influyentes del mundo de las últimas dos décadas.
              </p>
            </div>
            <div className="col-12 mb-10 d-flex align-items-center justify-content-center">
              <span
                className="label-title-lg "
                style={{
                  backgroundColor: "var(--tp-theme-4)",
                  color: "var(--tp-common-white)",
                  fontWeight: "bold",
                }}
              >
                Registro
              </span>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mt-10">
              <TextField
                className="w-100"
                label="Nombre (s)"
                variant="outlined"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                id="fullName"
                name="fullName"
                type="text"
                error={touched.fullName && Boolean(errors.fullName)}
                helperText={touched.fullName && errors.fullName}
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mt-10">
              <TextField
                className="w-100"
                label="Primer Apellido"
                variant="outlined"
                value={values.firstSurname}
                onChange={handleChange}
                onBlur={handleBlur}
                id="firstSurname"
                name="firstSurname"
                type="text"
                error={touched.firstSurname && Boolean(errors.firstSurname)}
                helperText={touched.firstSurname && errors.firstSurname}
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mt-10">
              <TextField
                className="w-100"
                label="Segundo Apellido"
                variant="outlined"
                value={values.secondSurname}
                onChange={handleChange}
                onBlur={handleBlur}
                id="secondSurname"
                name="secondSurname"
                type="text"
                error={touched.secondSurname && Boolean(errors.secondSurname)}
                helperText={touched.secondSurname && errors.secondSurname}
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mt-10">
              <TextField
                className="w-100"
                label="Email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                name="email"
                type="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mt-10">
              <TextField
                select
                className="w-100"
                label="Seleccione su cargo"
                variant="outlined"
                value={values.post}
                onChange={handleChange}
                onBlur={handleBlur}
                id="post"
                name="post"
                error={touched.post && Boolean(errors.post)}
                helperText={touched.post && errors.post}
              >
                <MenuItem value="Directivos">Directivos</MenuItem>
                <MenuItem value="Catedráticos">Catedráticos</MenuItem>
                <MenuItem value="Periodistas">
                  Periodistas
                </MenuItem>
                <MenuItem value="Otro">
                Otro
                </MenuItem>
              </TextField>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mt-10">
              <TextField
                className="w-100"
                label="Teléfono"
                variant="outlined"
                value={values.phone}
                onChange={handlePhoneChange}
                onBlur={handleBlur}
                id="phone"
                name="phone"
                type="text"
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mt-10">
              <TextField
                className="w-100"
                label="Institución o empresa"
                variant="outlined"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                id="company"
                name="company"
                type="text"
                error={touched.company && Boolean(errors.company)}
                helperText={touched.company && errors.company}
              />
            </div>
            <div
              className={`col-xxl-6 col-xl-6 col-lg-6 col-md-6 d-flex align-items-end justify-content-lg-start justify-content-center ${
                movilIpadaScreen ? "mt-30" : "mt-10"
              } `}
            >
              {loader ? (
                <ProgressButton />
              ) : (
                <>
                  <button
                    className="btn-secondary-lg fw-bold"
                    type="submit"
                    aria-label="Iniciar sesión"
                  >
                    Registrar
                  </button>
                </>
              )}
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mt-10">
              <span className="text-black mr-2 d-inline-flex gap-1 flex-column">
                Términos y condiciones
                <a
                  href="/aviso-de-privacidad-integral-baz.pdf"
                  target="_blank"
                  className="ml-2 d-inline-flex"
                  style={{ color: "#0000ff" }}
                >
                  haga clic aquí
                </a>
              </span>
            </div>
          </div>

          {/* <div className="row mx-0 mb-15 p-0">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <label htmlFor="sendingInstitution">
                INSTITUCIÓN DE PROCEDENCIA<span>*</span>
              </label>
              <input
                className="input-login"
                value={values.sendingInstitution}
                onChange={handleChange}
                onBlur={handleBlur}
                id="sendingInstitution"
                name="sendingInstitution"
                type="text"
                placeholder="Institución"
              />
              {touched.sendingInstitution && (
                <ErrorMsg error={errors.sendingInstitution || ""} />
              )}
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <label htmlFor="nationality">
                NACIONALIDAD<span>*</span>
              </label>
              <select
                className="input-login"
                value={values.nationality}
                onChange={handleChange}
                onBlur={handleBlur}
                id="nationality"
                name="nationality"
              >
                {nationalityData.map(({ label, value }, i) => (
                  <option key={i} value={value}>
                    {label}
                  </option>
                ))}
              </select>

              {touched.nationality && (
                <ErrorMsg error={errors.nationality || ""} />
              )}
            </div>
          </div>

          <div className="row mx-0 mb-15 p-0">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 ">
              <label htmlFor="age">
                EDAD<span>*</span>
              </label>
              <input
                className="input-login"
                value={values.age !== 0 ? values.age : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                id="age"
                name="age"
                type="text"
                placeholder="Introduce tu edad"
              />
              {touched.age && <ErrorMsg error={errors.age || ""} />}
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 ">
              <label htmlFor="email">
                EMAIL<span>*</span>
              </label>
              <input
                className="input-login"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                name="email"
                type="text"
                placeholder="Introduce tu mail"
              />
              {touched.email && <ErrorMsg error={errors.email || ""} />}
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 ">
              <label htmlFor="confirmEmail">
                CONFIRMA EMAIL<span>*</span>
              </label>
              <input
                className="input-login"
                value={values.confirmEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirmEmail"
                name="confirmEmail"
                type="text"
                placeholder="Confirma tu mail"
              />
              {touched.confirmEmail && (
                <ErrorMsg error={errors.confirmEmail || ""} />
              )}
            </div>
          </div> */}
        </div>
      </form>
      {/* <Cookie
        lenguage="esp"
        setCheck={handleClickTerm}
        setOpen={setOpen}
        open={open}
      /> */}
    </ThemeProvider>
  );
};
