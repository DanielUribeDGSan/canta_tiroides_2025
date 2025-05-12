import { Link } from 'react-router-dom';
import ImgLobby from '../../assets/img/home/home.jpg';
import { LoaderImage } from '../ui/loader/LoaderImage';

// import ImgLobbyVertical from '../../assets/img/home/home-vertical.jpg';

export const Lobby = () => {
  return (
    <div className='container-video-img section-lobby'>
      <div className='video-img-content'>
        <LoaderImage image={ImgLobby} />

        <img className='img-content' src={ImgLobby} alt='danone' />

        <Link className='market' to={'/mercadito'} />

        <a
          className='information'
          href='https://api.nutritionforummx.com/Preguntas_frecuentes_NF2023.pdf'
          target='_blank'
        />
        <Link className='auditorium' to={'/auditorio'} />
        <Link className='bibliography' to={'/programa'} />
      </div>
    </div>
  );
};
