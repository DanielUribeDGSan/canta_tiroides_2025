import Logo from '../../../assets/img/login/logo-nutricion.png';

interface Props {
  toggleFuntion: () => (event: any) => void;

  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerContent = ({ toggleFuntion, setOpen }: Props) => {
  const closeDrawer = () => {
    localStorage.setItem('configuredCookie', 'true');
    localStorage.setItem('cookieEstadistica', 'true');
    localStorage.setItem('cookieExperiencia', 'true');
    toggleFuntion()(event);
  };

  const closeDrawerNotAccetp = () => {
    localStorage.setItem('configuredCookie', 'false');
    toggleFuntion()(event);
  };

  return (
    <>
      <div className='row w-100 m-0 overflow-x-hidden drawer-cookies'>
        <div className='col-xxl-4 col-12 d-flex align-items-center justify-content-center'>
          <img className='img-fluid' src={Logo} alt='danone' />
        </div>
        <div className='col-xxl-4 col-12 d-flex align-items-center justify-content-center'>
          <div className='content'>
            <h2>Respeto a su privacidad.</h2>
            <p>
              Respetamos su privacidad y utilizamos cookies para mejorar su
              experiencia en nuestro sitio web. Estas cookies nos ayudan a
              analizar y mejorar su experiencia de usuario y personalizar la
              visualización del contenido. Puede gestionar sus preferencias de
              cookies en cualquier momento haciendo clic en "Administrar mis cookies".
            </p>
            <p>
              Al hacer clic en "Acepto", nos autoriza a utilizar todas las
              cookies. Si desea obtener más información, puede consultar nuestra
              política de privacidad y tecnologías de rastreo para conocer
              nuestros sitios asociados y obtener una mayor transparencia en
              nuestras prácticas. Estamos comprometidos con la protección de sus
              datos y su control sobre su experiencia en línea.
            </p>
          </div>
        </div>
        <div className='col-xxl-4 col-12 d-flex align-items-center justify-content-center'>
          <div className='buttons'>
            <button
              className='btn-primary-lg'
              type='button'
              onClick={closeDrawer}
            >
              Acepto
            </button>
            <button
              className='btn-primary-lg'
              type='button'
              onClick={closeDrawerNotAccetp}
            >
              No acepto
            </button>
            <button
              className='btn-primary-lg'
              type='button'
              onClick={() => setOpen(true)}
            >
              Administrar mis cookies
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
