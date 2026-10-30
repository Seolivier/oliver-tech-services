import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pages = {
  '/': {
    title: 'Oliver Tech Services | Typing, CVs, Phone Setup & Irembo in Kigali',
    description:
      'Fast, affordable tech help in Kigali: CV writing and typing, phone and app setup, Wi-Fi support, account recovery, document services and Irembo services.',
  },
  '/services': {
    title: 'Our Services | Oliver Tech Services',
    description:
      'CV writing, typing, phone setup, Wi-Fi help, account recovery, document conversion and Irembo services in Kigali.',
  },
  '/about': {
    title: 'About Us | Oliver Tech Services',
    description:
      'How Oliver Tech Services helps people in Kigali get their technology working, quickly and at a fair price.',
  },
  '/contact': {
    title: 'Contact Us | Oliver Tech Services',
    description:
      'Call, WhatsApp or message Oliver Tech Services in Kigali. We respond fast.',
  },
  '/admin': {
    title: 'Admin | Oliver Tech Services',
    description: '',
  },
};

function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] || pages['/'];
    document.title = page.title;

    const tag = document.querySelector('meta[name="description"]');
    if (tag && page.description) {
      tag.setAttribute('content', page.description);
    }
  }, [pathname]);

  return null;
}

export default PageMeta;

