import Julio5 from '../../assets/img/program/5-julio.svg';
import Julio6 from '../../assets/img/program/6-julio.svg';
import Title from '../../assets/img/program/title.svg';
import { Programam } from '../../interfaces/Program';

interface Props {
  setProgramImage: React.Dispatch<React.SetStateAction<string>>;
  idModal: string;
  programa: Programam[];
}

export const ButtonsProgram = ({
  setProgramImage,
  idModal,
  programa,
}: Props) => {
  const handleClick = (imageUrl: string) => {
    setProgramImage(imageUrl);
  };

  return (
    <>
      <img className='btn-title img-fluid' src={Title} alt='danone' />

      <button
        className=' btn-5-julio'
        aria-label='abrir programa'
        data-bs-toggle='modal'
        data-bs-target={`#${idModal}`}
        onClick={() => handleClick(programa[0].imagen)}
      >
        <img className='img-fluid' src={Julio5} alt='danone' />
      </button>

      <button
        className='btn-6-julio'
        aria-label='abrir programa'
        data-bs-toggle='modal'
        data-bs-target={`#${idModal}`}
        onClick={() => handleClick(programa[1].imagen)}
      >
        <img className='img-fluid' src={Julio6} alt='danone' />
      </button>
    </>
  );
};
