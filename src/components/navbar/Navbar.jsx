import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image className={styles.logoImg} src="/cocktail-logo.png" alt="Logo" width={50} height={50} />
        <div className={styles.logoText}>Taste Explorer</div>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="./">Home</Link>
        <Link className={styles.link} href="./">About</Link>
        <Link className={styles.link} href="./">Contact</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
