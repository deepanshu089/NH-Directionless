import React from 'react'
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1731055699/logo_dummy_e2mwqs.png" alt="" />
      </div>
      <div className={styles.tabs}>
        <a href="">Home</a>
        <a href="">Games</a>
        <a href="">About Us</a>
        <a href="">Journals</a>
        <a href="">Contact</a>
      </div>

      <div className={styles.userDetails}>
        
      </div>
    </div>
  )
}

export default Navbar
