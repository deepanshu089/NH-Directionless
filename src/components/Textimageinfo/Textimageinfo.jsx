import React from 'react'
import styles from './Textimageinfo.module.scss';

function Textimageinfo() {
  return (
    <div className={styles.textimageinfo}>
      <div className={styles.sctn1}>
        <img src='https://res.cloudinary.com/dg361q5uv/image/upload/v1731073488/Track/rp6sav8uuiejnnegr8ck.webp' alt="" />
        <p className={styles.textbox}> Meet Pooh the Panda, a fluffy adventurer on a mission to reduce screen time! With his warm smile and playful spirit, Pooh invites you to explore the great outdoors, discover nature’s wonders, and create unforgettable memories through exciting adventures! 🌳🐼✨
        </p>
      </div>
      <div className={styles.sctn1} style={{display: 'flex' ,flexDirection: 'row-reverse'}}>
        <img src='https://res.cloudinary.com/dg361q5uv/image/upload/v1731073598/Track/ivf8gt1zmaxmifcivq11.webp' alt="" />
        <p className={styles.textbox}>Pooh the Panda encourages kids to put down their phones and join him in exciting outdoor games, exploring nature, and creating unforgettable memories together. Let’s make every day an adventure! 🐼🌳✨
        </p>
      </div>
      <div className={styles.sctn1} >
        <img src='https://res.cloudinary.com/dg361q5uv/image/upload/v1731073746/Track/amlyu8fvjmtpcqtlmpzo.webp' alt="" />
        <p className={styles.textbox}>"Hey kids! Let’s put down our phones and dive into our journals together! Writing and sharing our thoughts can be a fun adventure. Join me, and let’s explore our imaginations on paper! 🐼📖✨"
        </p>
      </div>
      <div className={styles.sctn1} style={{display: 'flex' ,flexDirection: 'row-reverse'}}>
        <img src='https://res.cloudinary.com/dg361q5uv/image/upload/v1731073745/Track/qaygqbospgv7x84p4o5z.webp' alt="" />
        <p className={styles.textbox}>"Hi there! I’m Pooh the Panda, and I’d love to know more about you! What are your favorite activities? Do you have a favorite book or adventure? Let’s share stories and discover the fun things we can do together! 🐼💚✨"
        .</p>
      </div>
      <div className={styles.sctn1} >
        <img src='https://res.cloudinary.com/dg361q5uv/image/upload/v1731073936/Track/ibelhehxfjfmdz9fc7qt.webp' alt="" />
        <p className={styles.textbox}>Hey friends! I’d love to hear from you! Send me a letter at Pooh the Panda, Adventure Forest, Nature Lane. Share your favorite activities or ask for tips on outdoor fun! Let’s connect and have more adventures together! 🐼✉🌳✨</p>
      </div>
    </div>
  )
}

export default Textimageinfo
