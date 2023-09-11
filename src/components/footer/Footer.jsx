import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/cocktail-logo.png" alt="logo" width={50} height={50} />
          <h2 className={styles.logoText}>Taste Explorer</h2>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          nulla totam voluptate officiis esse molestias culpa deleniti cum animi
          fuga harum ex repudiandae blanditiis sequi, odio obcaecati hic illo
          labore.
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Add Cocktail</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Categories</span>
          <Link href="/">Long</Link>
          <Link href="/">Short</Link>
          <Link href="/">Punch</Link>
          <Link href="/">Non Alcohol</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facabook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Linkedin</Link>
          <Link href="/">GitHub</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
