import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { useDanone } from '../../hooks/useDanone';

export const ResetPasswordContent = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [input, setInput] = useState('');
  const { resetPassword } = useDanone();

  const handleChange = (data: any) => {
    setInput(data.target.value);
  };

  const handleClick = () => {
    if (!input) {
      Swal.fire({
        title: 'Email vacío',
        text: 'Es necesario ingresar tu email',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
      });
      return false;
    } else if (!validateEmail(input)) {
      Swal.fire({
        title: 'Email inválido',
        text: 'Ingresa un email válido',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    resetPassword(input, 1);
    setInput('');
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='reset-content'>
      <button data-bs-dismiss='modal' ref={buttonRef} />
      <input
        type='email'
        placeholder='email'
        onChange={handleChange}
        value={input}
      />
      <button className='btn-primary-md ' onClick={handleClick}>
        Recuperar contraseña
      </button>
    </div>
  );
};
