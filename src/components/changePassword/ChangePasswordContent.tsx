import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormChangePassword } from '../../interfaces/FormChangePassword';
import { useState } from 'react';
import ErrorMsg from './ErrorMsg';
import { useDanone } from '../../hooks/useDanone';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface Props {
  token: string;
}
export const ChangePasswordContent = ({ token }: Props) => {
  const { changePassword } = useDanone();
  const [loader, setLoader] = useState(false);
  const initialValues: FormChangePassword = {
    password: '',
    confirmPassword: '',
  };

  const changeSchema = Yup.object({
    password: Yup.string()
      .required('La contraseña es obligatoria')
      .min(6, 'Ingresa mínimo 6 caracteres')
      .label('Contraseña'),
    confirmPassword: Yup.string()
      .required('Confirma tu contraseña')
      .oneOf([Yup.ref('password'), ''], 'Las contraseñas no coinciden'),
  });

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues,
      validationSchema: changeSchema,
      onSubmit: async ({ password }) => {
        setLoader(true);
        await changePassword(password, token, 1);
        setLoader(false);
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-login'>
        <div className='mb-30'>
          <label htmlFor='password'>CONTRASEÑA</label>
          <input
            className='input-login'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id='password'
            name='password'
            type='password'
            placeholder='Ingresa tu correo'
          />
          {touched.password && <ErrorMsg error={errors.password || ''} />}
        </div>
        <div>
          <label htmlFor='confirmPassword'>CONFIRMAR CONTRASEÑA</label>
          <input
            className='input-login'
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            placeholder='Ingresa tu contraseña'
          />
          {touched.confirmPassword && (
            <ErrorMsg error={errors.confirmPassword || ''} />
          )}
        </div>
        {loader ? (
          <div className='mt-20'>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress sx={{ color: 'var(--tp-theme-2)' }} />
            </Box>
          </div>
        ) : (
          <button
            className='btn-primary-lg fw-bold mt-20'
            type='submit'
            aria-label='Iniciar sesión'
          >
            Cambiar contraseña
          </button>
        )}
      </form>
    </div>
  );
};
