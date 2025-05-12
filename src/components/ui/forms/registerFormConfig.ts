import * as Yup from "yup";
import { FormValuesRegister } from "../../../interfaces/registerForm";

export const initialValues: FormValuesRegister = {
  fullName: "",
  firstSurname: "",
  secondSurname: "",
  company: "",
  post: "",
  email: "",
  phone: "",
};

export const loginSchema = Yup.object({
  fullName: Yup.string()
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
      "Solo se permiten letras en el nombre completo"
    )
    .required("Los nombre (s) son obligatorios")
    .label("Nombre (s) "),
  firstSurname: Yup.string()
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
      "Solo se permiten letras en el nombre completo"
    )
    .required("El primer apellido es obligatorio")
    .label("Primer apellido"),
  secondSurname: Yup.string()
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
      "Solo se permiten letras en el nombre completo"
    )
    .required("El segundo apellido es obligatorio")
    .label("Segundo apellido"),
  company: Yup.string()
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
      "Solo se permiten letras en la institución o empresa"
    )
    .required("La institución o empresa es obligatoria")
    .label("⁠Institución o empresa"),
  post: Yup.string()
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
      "Solo se permiten letras en el cargo"
    )
    .required("El cargo es obligatorio")
    .label("Cargo"),
  email: Yup.string()
    .required("El email es obligatorio")
    .email("Debes ingresar un email Válido")
    .label("Email"),
});
