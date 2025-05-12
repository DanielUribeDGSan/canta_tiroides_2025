import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { useDanone } from '../../hooks/useDanone';

export const ResetPasswordContentIng = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [input, setInput] = useState('');
  const { resetPassword } = useDanone();

  const handleChange = (data: any) => {
    setInput(data.target.value);
  };

  const handleClick = () => {
    if (!input) {
      Swal.fire({
        title: 'Empty email',
        text: 'It is necessary to enter your email',
        icon: 'warning',
        confirmButtonText: 'Accept',
      });
      return false;
    } else if (!validateEmail(input)) {
      Swal.fire({
        title: 'Email inválido',
        text: 'Ingresa un email válido',
        icon: 'warning',
        confirmButtonText: 'Accept',
      });
      return false;
    }
    resetPassword(input, 2);
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
        Password recovery
      </button>
    </div>
  );
};
