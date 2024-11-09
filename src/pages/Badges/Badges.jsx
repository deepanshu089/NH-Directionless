import React from 'react'
import styles from './Badges.module.scss';

const Badges = () => {
  return (
    <div className={styles.badges}>
      <h1>Your Badges</h1>

      <div className={styles.badgecorner}>
        <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1731076046/Badge3_rhs4xg.webp" alt="" />
        

        <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1731076241/Badge5_d3dpab.jpg" alt="" />
        
        <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1731076045/Badge2_ki2lip.png" alt="" className={styles.unlock} />

        <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1731076046/Badge4_qge1oq.jpg" alt="" className={styles.unlock}/>

        <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1731077361/Badge6_t5vkpi.webp" alt="" className={styles.unlock}/>

        <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1731077632/Badge7_anw3io.jpg" alt="" className={styles.unlock}/>
      </div>
    </div>
  )
}

export default Badges
