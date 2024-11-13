import React from 'react';
import styles from './You.module.scss';

const You = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Oh No!</h1>
      <div className={styles.imageContainer}>
        <img src="https://via.placeholder.com/400" alt="Pooh Angry" />
      </div>
      <p>
        Pooh is angry with you. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis dicta minus nam id odit ipsum assumenda,
        temporibus hic ratione optio officia, pariatur totam sequi, dolor
        laboriosam. Reiciendis temporibus labore odit..
      </p>
      <button className={styles.cloudButton}>why</button>
    </div>
  );
}

export default You;
