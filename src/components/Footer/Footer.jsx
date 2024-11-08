import React from 'react'
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footersection}>
        <h3>About Us</h3>
        <p>Learn more about our mission and vision.</p>
    </div>
    <div className={styles.footersection}>
        <h3>Quick Links</h3>
        <a href="#">Home</a> |
        <a href="#">Services</a> |
        <a href="#">Contact</a>
    </div>
    <div className={styles.footersection}>
        <h3>Contact Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
    </div>
    </div>
  )
}

export default Footer