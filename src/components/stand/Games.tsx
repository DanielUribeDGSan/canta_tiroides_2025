import { useState } from 'react';
import { ModalStand } from '../ui/modals/ModalStand';
import ImgTest from '../../assets/img/stand/image-test.png';

export const Games = () => {
  const [showGame, setshowGame] = useState(false);

  const handleClick = () => {
    setshowGame(!showGame);
  };

  return (
    <ModalStand idModal={'modalStand'}>
      <>
        <button
          aria-label='abrir modal del estand'
          onClick={handleClick}
          className='w-100'
          style={{ height: '90vh' }}
        >
          <img
            src={ImgTest}
            className='img-fluid'
            alt='test'
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </button>
      </>
    </ModalStand>
  );
};
