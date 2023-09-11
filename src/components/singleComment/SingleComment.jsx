import styles from "./singleComment.module.css";
import UserMark from "../userMark/UserMark";

const SingleComment = () => {
  return (
    <div className={styles.container}>
      <UserMark />
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ea magni
        modi vel unde placeat similique voluptates nam minima! 
      </p>
    </div>
  );
};

export default SingleComment;
