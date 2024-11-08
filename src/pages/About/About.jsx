import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      {}
      <div className={styles.meetPoohSection}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="https://res.cloudinary.com/dg361q5uv/image/upload/v1731063179/Track/wxaayndae2u8fb4k4h47.webp" alt="Pooh" />
        </div>
        <div className={styles.textContainer}>
          <h1>Meet Pooh</h1>
          <p>
            Pooh is a lovable and adventurous bear Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iste enim doloribus mollitia maxime veniam repellendus tenetur cumque dolor voluptates minima explicabo nam. Deserunt mollitia, quis dolore sint reiciendis ipsa! who spends his days in the Hundred Acre Wood, always looking for honey and spending time with his friends.
          </p>
        </div>
      </div>

      {}
      <div className={styles.familySection}>
        <div className={styles.textLeft}>
          <h2>His Family</h2>
          <p>
            Pooh’s family is a close-knit group of friends,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusamus recusandae minima suscipit commodi, qui veritatis eaque molestias sequi nesciunt dolorum ex sunt, vel maxime animi aliquid voluptate officia repellat. including Tigger, Eeyore, Piglet, and Rabbit. Together, they create a family-like environment in the Hundred Acre Wood.
          </p>
        </div>
        <div className={styles.imageRight}>
          <img src="https://res.cloudinary.com/dg361q5uv/image/upload/v1731063377/Track/uahkiijrjuskbjtueo2p.webp" alt="Pooh's Family" />
        </div>
      </div>

      {}
      <div className={styles.homeSection}>
        <div className={styles.textLeft}>
          <h2>His Home</h2>
          <p>
            Pooh's home is a cozy little Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo voluptate provident dolores nihil. Aliquid hic id laborum dolorum impedit ad! Quis ducimus quae corrupti molestias ea asperiores a nostrum. house made of a large tree. It is filled with honey pots and a warm fireplace, making it the perfect place for Pooh to relax and enjoy his favorite treat.
          </p>
        </div>
        <div className={styles.imageRight}>
          <img src="https://res.cloudinary.com/dg361q5uv/image/upload/v1731063667/Track/tr3jieqfbtalkjxv7rrx.webp" alt="Pooh's Home" />
        </div>
      </div>
    </div>
  );
};

export default About;
