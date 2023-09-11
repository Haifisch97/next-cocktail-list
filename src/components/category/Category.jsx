import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";

const Category = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cocktail Categories</h2>
      <div className={styles.categories}>
          <Link href="/list?cat=long" className={`${styles.category} ${styles.long}`}>
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            long
          </Link>
          <Link href="/list?cat=short" className={`${styles.category} ${styles.short}`}>
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            short
          </Link>
          <Link href="/list?cat=shot" className={`${styles.category} ${styles.shot}`}>
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            shot
          </Link>
          <Link href="/list?cat=punch" className={`${styles.category} ${styles.punch}`}>
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            punch
          </Link>
          <Link href="/list?cat=oldFashion" className={`${styles.category} ${styles.oldFashion}`}>
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            old fashion
          </Link>
          <Link href="/list?cat=nonAlcohol" className={`${styles.category} ${styles.nonAlcohol}`}>
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            non alcohol
          </Link>
      </div>
    </div>
  );
};

export default Category;
