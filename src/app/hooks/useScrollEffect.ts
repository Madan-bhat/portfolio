import { useEffect } from 'react';

const useScrollEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.parallax');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add('scrolled');
        } else {
          section.classList.remove('scrolled');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useScrollEffect;
