import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';

interface Props {
  idModal: string;
  children: JSX.Element;
}

export const ModalStand = ({ idModal, children }: Props) => {
  const movilIpadaScreen = useMediaQuery('(max-width:1000px)');

  return (
    <div
      className='modal fade'
      id={idModal}
      tabIndex={-1}
      aria-labelledby={idModal}
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      aria-hidden='true'
    >
      <div
        className={
          movilIpadaScreen
            ? 'modal-dialog modal-xl modal-stand'
            : 'modal-dialog modal-dialog-centered modal-xl modal-stand'
        }
      >
        <div className='modal-content'>
          <div className='modal-body'>
            <button type='button' className='btn close' data-bs-dismiss='modal'>
              <CloseIcon />
            </button>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
