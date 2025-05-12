import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Logo from '../../../assets/img/login/logo-nutricion.png';

interface Props {
  image: string;
}
export const LoaderImage = ({ image }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const adjustSize = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', adjustSize);
      adjustSize();

      return () => {
        window.removeEventListener('resize', adjustSize);
      };
    }
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          className='loader'
          style={{
            width: width,
            height: height,
          }}
        >
          <img className='img-fluid' src={Logo} alt='logo danone nutrición' />
          <Box sx={{ display: 'flex' }}>
            <CircularProgress sx={{ color: 'var(--tp-theme-2)' }} />
          </Box>
        </div>
      ) : null}
    </>
  );
};
