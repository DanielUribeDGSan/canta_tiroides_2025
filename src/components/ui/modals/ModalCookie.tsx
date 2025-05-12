import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCheck: () => void;
}

export const ModalCookie = ({ open, setOpen, setCheck }: Props) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickClose = () => {
    setCheck();
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Política de cookies'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: '1rem' }}>
            Este sitio web utiliza cookies para ofrecerte la mejor experiencia
            de navegación posible. Las cookies son pequeños archivos de datos
            que se almacenan en tu dispositivo cuando visitas nuestro sitio web.
            Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo
            con nuestra Política de cookies.
          </DialogContentText>

          <DialogContentText sx={{ marginBottom: '1rem' }}>
            Utilizamos cookies esenciales para permitir que el sitio web
            funcione correctamente y cookies de rendimiento para recopilar
            información sobre cómo los usuarios interactúan con nuestro sitio
            web y mejorar su funcionalidad.
          </DialogContentText>

          <DialogContentText sx={{ marginBottom: '1rem' }}>
            También utilizamos cookies de análisis y publicidad para
            personalizar el contenido y los anuncios en función de tus intereses
            y preferencias. Puedes administrar tus preferencias de cookies en
            cualquier momento desde la configuración de tu navegador. Al
            continuar navegando por nuestro sitio web, aceptas el uso de
            cookies. Si no estás de acuerdo, por favor, cierra este sitio web.
          </DialogContentText>
          <DialogContentText sx={{ marginBottom: '1rem' }}>
            Gracias por visitarnos
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button
            onClick={handleClose}
            sx={{ color: 'var(--tp-common-black)' }}
          >
            No acepto
          </Button> */}
          <Button
            onClick={handleClickClose}
            autoFocus
            sx={{ color: 'var(--tp-common-black)' }}
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
