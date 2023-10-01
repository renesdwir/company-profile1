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
  const datas = await getData();
  return (
    <div className={styles.mainContainer}>
      {datas.map((data) => (
        <Link
          key={data._id}
          href={`/blog/${data._id}`}
          className={styles.container}
        >
          <div className={styles.imageContainer}>
            <Image
              src={data.image}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
