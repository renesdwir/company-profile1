import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Blog = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            ex ratione laborum laudantium! Nobis omnis, unde dolorem quaerat
            illum provident, cumque dolore reiciendis vero corporis sapiente
            modi eaque sunt magnam.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
