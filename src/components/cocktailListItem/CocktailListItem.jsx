import React from "react";
import styles from "./cocktailListItem.module.css";
import Image from "next/image";
import Link from "next/link";


const CocktailListItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContaiter}>
        <Image className={styles.image} src="/p1.jpeg" alt="long" width={80} height={80}/>
      </div>
      <div className={styles.infoContaiter}>
        <div className={styles.category}>Long</div>
        <Link href="/" className={styles.name}>Ice Land</Link>
        <div className={styles.ingredients}>
          <span className={styles.ingredientsLabel}>Ingredients: </span>
          <span className={styles.ingredientsValue}>Vodka, Gin, Rum, Tequila, Triple sec, Lemon juice, Gomme syrup, Soda water</span>
        </div>
        <div className={styles.rating}>
          <span className={styles.ratingLabel}>Rating:</span>
          <span className={styles.ratingValue}>4.5</span>
        </div>
      </div>
    </div>
  );
};

export default CocktailListItem;
