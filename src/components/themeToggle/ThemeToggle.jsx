"use client";

import styles from "./themeToggle.module.css";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div 
      className={styles.toggle}
      style={{ left: theme === "dark" ? "1px" : "24px" }}
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
