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

export const ModalCookieIng = ({ open, setOpen, setCheck }: Props) => {
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
        <DialogTitle id='alert-dialog-title'>{'Cookie Policy'}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: '1rem' }}>
            This website uses cookies to offer you the best possible browsing
            experience. browsing experience possible. Cookies are small data
            files that are stored on your device when you visit our website. By
            using our website, you agree to the use of cookies in accordance
            with our Cookie Policy. with our Cookie Policy.
          </DialogContentText>

          <DialogContentText sx={{ marginBottom: '1rem' }}>
            We use both essential cookies to enable the website to function
            properly and to enable the website to function properly and
            performance cookies to information about how users interact with our
            website and to improve its functionality. website and improve its
            functionality.
          </DialogContentText>

          <DialogContentText sx={{ marginBottom: '1rem' }}>
            We also use analytics and advertising cookies to personalize content
            and ads based on your interests and preferences. and preferences.
            You can manage your cookie preferences at any time at any time from
            your browser settings. At by continuing to browse our website, you
            agree to our use of cookies. cookies. If you do not agree, please
            close this website.
          </DialogContentText>
          <DialogContentText sx={{ marginBottom: '1rem' }}>
            Thank you for visiting us
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
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
