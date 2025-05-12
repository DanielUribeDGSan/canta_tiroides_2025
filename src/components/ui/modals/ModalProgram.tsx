interface Props {
  idModal: string;
  children: JSX.Element;
}

export const ModalProgram = ({ idModal, children }: Props) => {
  return (
    <div
      className='modal fade modal-lg modal-program'
      id={idModal}
      tabIndex={-1}
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'></h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>{children}</div>
        </div>
      </div>
    </div>
  );
};
