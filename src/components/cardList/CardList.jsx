import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const CardList = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Cocktails List</h2>
        <div className={styles.cardList}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <Pagination />
    </div>
  )
};

export default CardList;
