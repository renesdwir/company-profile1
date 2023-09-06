import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className={styles.img}
          fill={true}
          alt="background-image"
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>What Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            expedita cupiditate alias cum est, fugit odio voluptate rerum sit
            explicabo possimus vel autem atque earum quo ratione, architecto ea
            corporis odit deserunt numquam veniam ullam ex? <br />
            <br /> Odit culpa praesentium dolorum aperiam delectus blanditiis,
            numquam tenetur placeat, alias dolor odio tempore!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            expedita cupiditate alias cum est, fugit odio voluptate rerum sit
            explicabo possimus vel autem atque earum quo ratione, architecto ea
            corporis odit deserunt numquam veniam ullam ex? Odit culpa
            praesentium dolorum aperiam delectus blanditiis, numquam tenetur
            placeat, alias dolor odio tempore!
            <br />- Creative Illustration - Dynamic Website - Fast and Handy
            Mobile
          </p>
          <Button url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
