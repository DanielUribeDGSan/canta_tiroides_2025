import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const ButtonsBiographies2 = () => {
  const button = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    if (button) button.current?.click();
  };
  return (
    <>
      <button data-bs-dismiss='modal' aria-label='Close' ref={button} />
      <Link className='btn2-1' to={'/biografia/1'} onClick={handleClick} />
      <Link className='btn2-2' to={'/biografia/2'} onClick={handleClick} />
      <Link className='btn2-3' to={'/biografia/3'} onClick={handleClick} />
      <Link className='btn2-4' to={'/biografia/4'} onClick={handleClick} />

      <Link className='btn2-5' to={'/biografia/5'} onClick={handleClick} />
      <Link className='btn2-6' to={'/biografia/6'} onClick={handleClick} />
    </>
  );
};
