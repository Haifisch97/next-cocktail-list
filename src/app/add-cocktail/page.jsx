import styles from "./add-cocktail.module.css";
import AddIngredients from "@/components/addIngredients/AddIngredients";

const AddCocktail = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input
          type="text"
          name="title"
          className={styles.inputTitle}
          placeholder="Cocktail title"
        />
        <select name="catygory" className={styles.catygoryList}>
          <option value="null" className={styles.catygoryItem}>
            Select catygory
          </option>
          <option value="long" className={styles.catygoryItem}>
            long
          </option>
          <option value="long" className={styles.catygoryItem}>
            long
          </option>
          <option value="long" className={styles.catygoryItem}>
            long
          </option>
          <option value="long" className={styles.catygoryItem}>
            long
          </option>
          <option value="long" className={styles.catygoryItem}>
            long
          </option>
          <option value="long" className={styles.catygoryItem}>
            long
          </option>
        </select>
        <input
          type="text"
          name="image"
          className={styles.inputImage}
          placeholder="Link to Image"
        />
        <div className={styles.ingedients}>
          <AddIngredients />
        </div>
        <textarea
          name="method"
          rows="10"
          className={styles.textarea}
          placeholder="Making Method"
        ></textarea>
        <textarea
          name="history"
          rows="10"
          className={styles.textarea}
          placeholder="History"
        ></textarea>
        <button className={styles.button}>Add Cocktail</button>
      </form>
    </div>
  );
};

export default AddCocktail;
