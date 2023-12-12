"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = "authenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link className={styles.links} href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className={styles.links} href="/add-cocktail">
            Add Cocktail
          </Link>
          <span className={styles.links}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.dropdown}>
          <Link href="./">Home</Link>
          <Link href="./">About</Link>
          <Link href="./">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="./add-cocktail">Add Cocktail</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
