import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../../assets/json/40634-rotate-phone.json';

export const RotateHorizontalPhone = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      const isPortrait = window.matchMedia('(orientation: portrait)').matches;
      setShowMessage(isPortrait);
    };
    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return showMessage ? (
    <div className='rotate-horizontal-phone'>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '300px', width: '300px' }}
      />
      <div className='p-2'>
        <p className='text-center'>
          Por favor, voltea tu teléfono en horizontal.
        </p>
        <p className='text-center'>
          Verifica que no tengas deshabilitada la opción de voltear la pantalla.
        </p>
      </div>
    </div>
  ) : null;
};
