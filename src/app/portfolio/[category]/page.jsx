import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            aspernatur tenetur est consequatur rerum, hic exercitationem
            reiciendis nemo nulla harum, deserunt magnam officiis laboriosam
            fuga molestias modi, recusandae pariatur id? Suscipit tenetur ipsam
            vitae a dignissimos, sapiente pariatur. Cumque in animi magni dicta
            asperiores voluptatum hic veritatis saepe rem sit!
          </p>
          <Button text="See More" url="/" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
