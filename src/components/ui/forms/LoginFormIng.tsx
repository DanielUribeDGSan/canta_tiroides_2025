import { useFormik } from "formik";
import * as Yup from "yup";
import { FormValuesLogin } from "../../../interfaces/loginForm";
import ErrorMsg from "./ErrorMsg";
import { Link } from "react-router-dom";
import { useDanone } from "../../../hooks/useDanone";
import { useState } from "react";
import { ProgressButton } from "../progress/ProgressButton";
import { ModalResetPassword } from "../modals/ModalResetPassword";
import { ResetPasswordContentIng } from "../../login/ResetPasswordContentIng";

export const LoginFormIng = () => {
  const { login } = useDanone();
  const [loader, setLoader] = useState(false);

  const initialValues: FormValuesLogin = {
    email: "",
  };

  const loginSchema = Yup.object({
    email: Yup.string().required("Email is required").email().label("Email"),
    password: Yup.string()
      .required("Password is mandatory")
      .min(6, "Enter minimum 6 characters")
      .label("Password"),
  });

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async ({ email }) => {
        setLoader(true);
        const userBody: FormValuesLogin = {
          email: email,
        };
        await login(userBody);
        setLoader(false);
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit} className="form-login">
        <div className="mb-30">
          <label htmlFor="email">E-MAIL</label>
          <input
            className="input-login"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
          />
          {touched.email && <ErrorMsg error={errors.email || ""} />}
        </div>

        <p
          className="reset-password"
          data-bs-toggle="modal"
          data-bs-target="#modalResetPassword"
          style={{ cursor: "pointer" }}
        >
          FORGOT MY PASSWORD
        </p>
        <div>
          {loader ? (
            <ProgressButton />
          ) : (
            <>
              <button
                className="btn-primary-lg fw-bold"
                type="submit"
                aria-label="Iniciar sesión"
              >
                ENTER
              </button>
              <Link className="link" to={"/register"}>
                REGISTER
              </Link>
            </>
          )}
        </div>
      </form>
      <ModalResetPassword idModal={"modalResetPassword"}>
        <>
          <ResetPasswordContentIng />
        </>
      </ModalResetPassword>
    </>
  );
};
