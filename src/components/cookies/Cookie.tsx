import { ModalCookie } from '../ui/modals/ModalCookie';
import { ModalCookieIng } from '../ui/modals/ModalCookieIng';

interface Props {
  lenguage: string;
  setCheck: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

export const Cookie = ({ lenguage, setCheck, setOpen, open }: Props) => {
  if (lenguage === 'ing') {
    return <ModalCookieIng open={open} setOpen={setOpen} setCheck={setCheck} />;
  } else {
    return <ModalCookie open={open} setOpen={setOpen} setCheck={setCheck} />;
  }
};
