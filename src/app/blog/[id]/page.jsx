import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim,
            excepturi praesentium quia nulla repellendus! Eius quasi non maxime
            vitae.
          </p>
          <div className={styles.author}>
            <Image
              src={
                "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              }
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jhon Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            }
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          sequi. Reiciendis quam, repudiandae officiis non iusto neque alias
          quasi aliquam maiores error minima dolorem sapiente libero amet nisi
          dicta necessitatibus sed dolorum et tempore a asperiores quidem?
          Porro, fuga libero? Et, cumque. Eum earum consequatur ipsum corporis
          dignissimos nobis et!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
