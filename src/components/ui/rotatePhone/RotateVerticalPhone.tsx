import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../../assets/json/97981-hand-holding-phone.json';
import { useMediaQuery } from '@mui/material';

export const RotateVerticalPhone = () => {
  const [showMessage, setShowMessage] = useState(false);
  const movilIpadaScreen = useMediaQuery('(max-width:1000px)');

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

  return movilIpadaScreen && !showMessage ? (
    <div className='rotate-horizontal-phone'>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '300px', width: '300px' }}
      />
      <div className='p-2'>
        <p className='text-center'>
          Por favor, voltea tu teléfono en vertical.
        </p>
        <p className='text-center'>
          Verifica que no tengas deshabilitada la opción de voltear la pantalla.
        </p>
      </div>
    </div>
  ) : null;
};
