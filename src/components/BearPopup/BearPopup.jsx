import React, { useState, useEffect } from 'react';
import styles from './BearPopup.module.scss';

const BearPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < lastScrollPos) {
        setShowPopup(true); 
      } else {
        setShowPopup(false); 
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  return (
    <div className={`${styles.bearpopup} ${showPopup ? styles.show : ''}`}>
      <img src="https://res.cloudinary.com/dg361q5uv/image/upload/v1731069773/Track/fagg5jxxkhn6yxkzxvkd.png" alt="Bear" className={styles.bearImage} />
    </div>
  );
};

export default BearPopup;
