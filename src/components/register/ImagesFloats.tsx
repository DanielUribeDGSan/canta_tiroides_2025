import IzquierdaAbajo from '../../assets/img/svg/esquina.svg';
import DerechaArriba from '../../assets/img/svg/esquina_superior_derecha.svg';
import AbajoDerecha from '../../assets/img/svg/esquina_derecha.svg';

export const ImagesFloats = () => {
  return (
    <>
      <img
        className='img-fluid img-left-bottom'
        src={IzquierdaAbajo}
        alt='danone'
      />
      <img
        className='img-fluid img-right-top'
        src={DerechaArriba}
        alt='danone'
      />
      <img
        className='img-fluid img-right-bottom'
        src={AbajoDerecha}
        alt='danone'
      />
    </>
  );
};
