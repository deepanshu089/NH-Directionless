import React from 'react'
import styles from './Textimageinfo.module.scss';

const Textimageinfo = () => {
  return (
    <div className={styles.textimage}>
      <div className={styles.imagebox}>
        <img src="https://res.cloudinary.com/dg361q5uv/image/upload/v1731073488/Track/rp6sav8uuiejnnegr8ck.webp" alt="" />
      </div>

      <div className={styles.textBox}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque iure illo in nihil unde, voluptate suscipit aliquam corrupti neque ea? Pariatur aut enim libero optio voluptatem nemo labore error ratione, voluptates accusantium, nostrum dolorem.</p>
      </div>
    </div>
  )
}

export default Textimageinfo
