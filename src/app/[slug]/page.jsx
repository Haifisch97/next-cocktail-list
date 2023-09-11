import SideMenu from "@/components/sideMenu/SideMenu";
import Comments from "@/components/comments/Comments";
import UserMark from "@/components/userMark/UserMark";
import styles from "./singleCocktail.module.css";
import Image from "next/image";

const SingleCocktail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Cocktail Name</h1>
          <div className={styles.info}>
          <UserMark/>
            <div className={styles.detail}>
              <div className={styles.category}>
                Category: <span>Long</span>
              </div>
              <div className={styles.rating}>Rating: 4.5/5 (Valuer: 128)</div>
            </div>
          </div>

          <div className={styles.ingredientList}>
            <div className={styles.ingedientTitle}>Ingredients</div>
            <div className={styles.ingredient}>name - measure</div>
            <div className={styles.ingredient}>name - measure</div>
            <div className={styles.ingredient}>name - measure</div>
            <div className={styles.ingredient}>name - measure</div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="cocktail" fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.making}>
            <h2 className={styles.descriptionTitle}>Making Method</h2>
            <p className={styles.descriptiontText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptatum nemo voluptatibus aspernatur quibusdam possimus
              distinctio molestiae quas ratione tempora, nulla modi quo ab
              similique, dicta tempore reiciendis. Sit, repellendus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Aliquid voluptatum
              nemo voluptatibus aspernatur quibusdam possimus distinctio
              molestiae quas ratione tempora, nulla modi quo ab similique, dicta
              tempore reiciendis. Sit, repellendus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquid voluptatum nemo voluptatibus
              aspernatur quibusdam possimus distinctio molestiae quas ratione
              tempora, nulla modi quo ab similique, dicta tempore reiciendis.
              Sit, repellendus.
            </p>
          </div>
          <div className={styles.history}>
            <h2 className={styles.descriptionTitle}>History</h2>
            <p className={styles.descriptiontText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptatum nemo voluptatibus aspernatur quibusdam possimus
              distinctio molestiae quas ratione tempora, nulla modi quo ab
              similique, dicta tempore reiciendis. Sit, repellendus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Aliquid voluptatum
              nemo voluptatibus aspernatur quibusdam possimus distinctio
              molestiae quas ratione tempora, nulla modi quo ab similique, dicta
              tempore reiciendis. Sit, repellendus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquid voluptatum nemo voluptatibus
              aspernatur quibusdam possimus distinctio molestiae quas ratione
              tempora, nulla modi quo ab similique, dicta tempore reiciendis.
              Sit, repellendus.
            </p>
          </div>
          <Comments />
        </div>
        <SideMenu />
      </div>
    </div>
  );
};

export default SingleCocktail;
