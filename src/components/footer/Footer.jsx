import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;Copyright 2023 Melodean. All Rights Reserved</div>
      <Link
        href={"https://saweria.co/supportdeveloper"}
        target="_blank"
        className={styles.link_container}
      >
        <Image
          src={"/capy_happy.svg"}
          alt="saweria_logo"
          width={25}
          height={25}
          className={styles.icon}
        />
        <div className={styles.link}>Support Developer</div>
      </Link>
    </div>
  );
};

export default Footer;
