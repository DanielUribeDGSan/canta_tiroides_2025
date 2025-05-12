import { useEffect } from 'react';

interface Props {
  description: string;
  title: string;
}

export const AddMeta = ({ title, description }: Props) => {
  useEffect(() => {
    // Actualizar las metaetiquetas
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${description}`);
    }

    const ogDescription = document.querySelector('meta[name="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', `${description}`);
    }

    const ogUrl = document.querySelector('meta[name="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://www.nutritionforummx.com/');
    }

    const ogTitle = document.querySelector('meta[name="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title}`);
    }

    const ogImage = document.querySelector('meta[name="og:image"]');
    if (ogImage) {
      ogImage.setAttribute(
        'content',
        'https://www.nutritionforummx.com/assets/logo-nutricion-22416ec0.png'
      );
    }
  }, []);
  return <></>;
};
