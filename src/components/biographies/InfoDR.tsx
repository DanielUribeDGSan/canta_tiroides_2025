import { Biographies } from '../../interfaces/biographies';
const urlFile = import.meta.env.VITE_URL_FILES;
interface Props {
  biographie: Biographies;
}
export const InfoDR = ({ biographie }: Props) => {
  return (
    <article className='InfoDR'>
      <h1>{biographie?.nombre}</h1>
      <div className='d-block'>
        <p>{biographie?.titulo}</p>
      </div>
      <div className='formation'>
        <img
          src={`${urlFile}/${biographie?.bandera}`}
          className='img-fluid'
          alt='flag'
        />
        <p>{biographie?.formacion}</p>
      </div>
      <div className='info'>
        <p dangerouslySetInnerHTML={{ __html: biographie?.resumen }} />
      </div>
    </article>
  );
};
