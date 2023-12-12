import styles from "./addIngredients.module.css";

const AddIngredients = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <input type="text" className={styles.ingredient} placeholder="Ingregient"/>
        <input type="text" className={styles.volume} placeholder="Volume"/>
        <button>Add</button>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <span className={styles.ingredient}>ingredient</span>
          <span> - </span>
          <span className={styles.volume}>volume</span>
          <button>X</button>
        </div>
        <div className={styles.item}>
          <span className={styles.ingredient}>ingredient</span>
          <span> - </span>
          <span className={styles.volume}>volume</span>
          <button>X</button>
        </div>
        <div className={styles.item}>
          <span className={styles.ingredient}>ingredient</span>
          <span> - </span>
          <span className={styles.volume}>volume</span>
          <button>X</button>
        </div>
      </div>
    </div>
  );
};

export default AddIngredients;
