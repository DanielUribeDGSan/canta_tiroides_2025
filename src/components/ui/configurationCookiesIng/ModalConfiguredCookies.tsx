import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleFuntion: () => (event: any) => void;
}

export const ModalConfiguredCookies = ({
  open,
  setOpen,
  toggleFuntion,
}: Props) => {
  const [switches, setSwitches] = useState({
    switch1: false,
    switch2: false,
    switch3: false,
  });

  const handleClose = () => {
    toggleFuntion()(event);
    setOpen(false);
    localStorage.setItem('configuredCookie', 'true');
    localStorage.setItem(
      'cookieEstadistica',
      switches.switch1 ? 'true' : 'false'
    );
    localStorage.setItem(
      'cookieExperiencia',
      switches.switch2 ? 'true' : 'false'
    );
  };

  const handleCloseReject = () => {
    toggleFuntion()(event);
    setOpen(false);
    localStorage.setItem('configuredCookie', 'false');
  };

  const handleCloseAcceptAll = () => {
    setSwitches({
      switch1: true,
      switch2: true,
      switch3: true,
    });
  };

  const handleSwitchChange = (event: any) => {
    const { name, checked } = event.target;
    setSwitches((prevSwitches) => ({ ...prevSwitches, [name]: checked }));
  };

  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title' sx={{ fontWeight: 'bold' }}>
          {'Manage my cookies'}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id='alert-dialog-description'>
            Le sugerimos que configure sus cookies para este sitio. Puede
            activar o desactivar las cookies. Su configuración se aplicará solo
            al sitio visitado, no a todos los sitios de la empresa TotalEnergies
            que visite. Puede cambiar su configuración en cualquier momento
            volviendo a este sitio y haciendo clic en el enlace Cookies.
          </DialogContentText> */}
          <div className='container'>
            <div className='cookie mb-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-bold mr-5'>
                  Technical and functional cookies
                </span>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switches.switch1}
                        onChange={handleSwitchChange}
                        name='switch1'
                      />
                    }
                    label={switches.switch1 ? 'Enabled' : 'Disabled'}
                    sx={{ span: { fontSize: '14px' } }}
                  />
                </FormGroup>
              </div>
              <p className='text-black' style={{ fontSize: '0.9rem' }}>
                Cookies necessary to ensure the optimal functioning of our
                websites. our websites. They generally relate to security,
                ergonomics, language security, ergonomics, language selection
                and the saving of your shopping cart. your shopping cart. They
                always remain activated.
              </p>
            </div>
            <div className='cookie mb-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-bold mr-5'>Statistical Cookies</span>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switches.switch2}
                        onChange={handleSwitchChange}
                        name='switch2'
                      />
                    }
                    label={switches.switch2 ? 'Enabled' : 'Disabled'}
                    sx={{ span: { fontSize: '14px' } }}
                  />
                </FormGroup>
              </div>
              <p className='text-black' style={{ fontSize: '0.9rem' }}>
                Cookies that allow us to better understand the use and
                performance of our website, generate generate statistics and
                improve our services. services. We or our partners may use these
                statistics to statistics to optimize your browsing experience.
              </p>
            </div>
            <div className='cookie mb-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-bold mr-5'>
                  Cookies to personalize your experience{' '}
                </span>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switches.switch2}
                        onChange={handleSwitchChange}
                        name='switch2'
                      />
                    }
                    label={switches.switch2 ? 'Enabled' : 'Disabled'}
                    sx={{ span: { fontSize: '14px' } }}
                  />
                </FormGroup>
              </div>
              <p className='text-black' style={{ fontSize: '0.9rem' }}>
                These cookies allow us to optimize your user experience,
                occasionally adapting the presentation of our site or offering
                you new features. offering you new features.
              </p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseReject}
            autoFocus
            sx={{ color: 'var(--tp-theme-1)' }}
          >
            Reject everything
          </Button>
          <Button
            onClick={handleCloseAcceptAll}
            autoFocus
            sx={{ color: 'var(--tp-theme-1)' }}
          >
            Accept all
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            sx={{ color: 'var(--tp-theme-1)' }}
          >
            Save configuration
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
