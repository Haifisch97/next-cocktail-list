import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <span className={styles.category}>Long</span>
          <span className={styles.rayting}>4.7/5</span>
        </div>
        <h2 className={styles.CocktailName}>
          <span>Ice Land</span>
        </h2>
        <ul className={styles.ingredientList}>
          <li className={styles.ingredientItem}>name - 10 ml.</li>
          <li className={styles.ingredientItem}>name - 10 ml.</li>
          <li className={styles.ingredientItem}>name - 10 ml.</li>
          <li className={styles.ingredientItem}>name - 10 ml.</li>
          <li className={styles.ingredientItem}>name - 10 ml.</li>
        </ul>
        <p className={styles.discription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ut
          voluptates deleniti autem doloremque, quisquam corrupti odit suscipit
          voluptatibus. Quaerat dicta tempore molestias vero eius id, vitae ad
          ab quisquam?
        </p>
        <div className={styles.lastLine}>
          <Link className={styles.more} href="./">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
