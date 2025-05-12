import { useEffect } from 'react';

export const ScrollIndicator: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollIndicator = document.getElementById('scroll-indicator');
      if (window.scrollY > 0) {
        scrollIndicator?.classList.remove('hidden');
      } else {
        scrollIndicator?.classList.add('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div id='scroll-indicator'></div>;
};
