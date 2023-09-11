import React from "react";
import styles from "./sideMenu.module.css";
import Link from "next/link";
import CocktailListItem from "../cocktailListItem/CocktailListItem";

const SideMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topCategory}>
        <h2 className={styles.title}>Category Kings</h2>
        <div className={styles.kingList}>
          <CocktailListItem />
          <CocktailListItem />
          <CocktailListItem />
          <CocktailListItem />
          <CocktailListItem />
        </div>
      </div>
      <div className={styles.categories}>
        <h2 className={styles.title}>Categories</h2>
        <div className={styles.categoryList}>
          <Link href="/" className={styles.categoryItem}>Long</Link>
          <Link href="/" className={styles.categoryItem}>Long</Link>
          <Link href="/" className={styles.categoryItem}>Long</Link>
          <Link href="/" className={styles.categoryItem}>Long</Link>
          <Link href="/" className={styles.categoryItem}>Long</Link>
          <Link href="/" className={styles.categoryItem}>Long</Link>
        </div>
      </div>
      <div className={styles.lastAdded}>
        <h2 className={styles.title}>Last Added</h2>
        <div className={styles.lastAddedList}>
          <CocktailListItem />
          <CocktailListItem />
          <CocktailListItem />
          <CocktailListItem />
          <CocktailListItem />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
