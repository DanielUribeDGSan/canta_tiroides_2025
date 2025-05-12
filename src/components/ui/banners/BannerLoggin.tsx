// import BgImage from '../../../assets/img/login/reactangulo-circle.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import Izquierda from '../../../assets/img/svg/esquina_izquierda.svg';
import Logo from '../../../assets/img/login/logo-nutricion.png';
import LogoDanone from '../../../assets/img/login/logo_danonone.png';

export const BannerLoggin = () => {
  const movilIpadaScreen = useMediaQuery('(max-width:1000px)');
  return (
    <div
      className='banner__login'
      // style={{ backgroundImage: `url('${BgImage}')` }}
    >
      {!movilIpadaScreen && (
        <div className='d-flex align-items-center justify-content-center h-100'>
          <img
            className='img-fluid logo'
            src={Logo}
            alt='danone'
          />
        </div>
      )}
      <div className='triangle backface-hidden'>
        <img
          className='img-fluid '
          src={LogoDanone}
          alt='danone'
        />
      </div>
      <img
        className='img-fluid img-left'
        src={Izquierda}
        alt='danone'
      />
    </div>
  );
};
