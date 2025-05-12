import * as Yup from "yup";
import { FormValuesLogin } from "../../../interfaces/registerForm";

export const initialValues: FormValuesLogin = {
  email: "",
};

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("El email es obligatorio")
    .email("Debes ingresar un email válido")
    .label("Email"),
});
