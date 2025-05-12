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
            <h2>Respect for your privacy.</h2>
            <p>
              We respect your privacy and use cookies to enhance your experience
              on our website. experience on our website. These cookies help us
              to analyze and improve your user experience and personalize the
              display of content. display of content. You can manage your cookie
              preferences at any time by cookies at any time by clicking on
              "Manage my cookies".
            </p>
            <p>
              By clicking "I accept", you authorize us to use all cookies.
              cookies. For more information, you can consult our privacy policy
              and tracking technologies to learn more about our partner sites
              our partner sites and to obtain greater transparency in our
              practices. our practices. We are committed to protecting your data
              and and your control over your online experience.
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
              I accept
            </button>
            <button
              className='btn-primary-lg'
              type='button'
              onClick={closeDrawerNotAccetp}
            >
              I do not accept
            </button>

            <button
              className='btn-primary-lg'
              type='button'
              onClick={() => setOpen(true)}
            >
              Manage my cookies
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
