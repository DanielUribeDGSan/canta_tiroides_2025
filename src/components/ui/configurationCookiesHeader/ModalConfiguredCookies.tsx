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
  const configuredCookies = localStorage.getItem('configuredCookie');
  const cookieExperiencia = localStorage.getItem('cookieExperiencia');
  const cookieEstadistica = localStorage.getItem('cookieEstadistica');
  const cookieFuncionales = localStorage.getItem('cookieFuncionales');

  const [switches, setSwitches] = useState({
    switch1: configuredCookies && cookieFuncionales === 'true' ? true : false,
    switch2: configuredCookies && cookieEstadistica === 'true' ? true : false,
    switch3: configuredCookies && cookieExperiencia === 'true' ? true : false,
  });

  const handleClose = () => {
    toggleFuntion()(event);
    setOpen(false);
    if (!switches.switch1 && !switches.switch2 && !switches.switch3) {
      localStorage.setItem('configuredCookie', 'false');
    } else {
      localStorage.setItem('configuredCookie', 'true');
    }
    localStorage.setItem(
      'cookieFuncionales',
      switches.switch1 ? 'true' : 'false'
    );
    localStorage.setItem(
      'cookieEstadistica',
      switches.switch2 ? 'true' : 'false'
    );

    localStorage.setItem(
      'cookieExperiencia',
      switches.switch3 ? 'true' : 'false'
    );
  };

  const handleCloseReject = () => {
    toggleFuntion()(event);
    setSwitches({
      switch1: false,
      switch2: false,
      switch3: false,
    });
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
          {'Administrar mis cookies'}
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
                  Cookies técnicas y funcionales
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
                    label={switches.switch1 ? 'Habilitado' : 'Deshabilitado'}
                    sx={{ span: { fontSize: '14px' } }}
                  />
                </FormGroup>
              </div>
              <p className='text-black' style={{ fontSize: '0.9rem' }}>
                Cookies necesarias para garantizar el funcionamiento óptimo de
                nuestros sitios web. Por lo general, tienen que ver con la
                seguridad, la ergonomía, la selección de idioma y el guardado de
                su cesta de la compra. Permanecen siempre activadas.
              </p>
            </div>
            <div className='cookie mb-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-bold mr-5'>Cookies estadísticas</span>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switches.switch2}
                        onChange={handleSwitchChange}
                        name='switch2'
                      />
                    }
                    label={switches.switch2 ? 'Habilitado' : 'Deshabilitado'}
                    sx={{ span: { fontSize: '14px' } }}
                  />
                </FormGroup>
              </div>
              <p className='text-black' style={{ fontSize: '0.9rem' }}>
                Cookies que permiten conocer mejor el uso y el rendimiento de
                nuestro sitio web, generar estadísticas y mejorar nuestros
                servicios. Nosotros o nuestros socios podríamos usar estas
                estadísticas para optimizar su experiencia de navegación.
              </p>
            </div>
            <div className='cookie mb-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-bold mr-5'>
                  Cookies para personalizar su experiencia
                </span>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switches.switch3}
                        onChange={handleSwitchChange}
                        name='switch3'
                      />
                    }
                    label={switches.switch3 ? 'Habilitado' : 'Deshabilitado'}
                    sx={{ span: { fontSize: '14px' } }}
                  />
                </FormGroup>
              </div>
              <p className='text-black' style={{ fontSize: '0.9rem' }}>
                Estas cookies nos permiten optimizar su experiencia de uso,
                adaptando ocasionalmente la presentación de nuestro sitio u
                ofreciéndole nuevas funciones.
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
            Rechazar todas
          </Button>
          <Button
            onClick={handleCloseAcceptAll}
            autoFocus
            sx={{ color: 'var(--tp-theme-1)' }}
          >
            Aceptar todas
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            sx={{ color: 'var(--tp-theme-1)' }}
          >
            Guardar configuración
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
