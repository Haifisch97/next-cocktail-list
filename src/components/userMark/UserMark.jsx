import styles from "./userMark.module.css";
import Image from "next/image";

const UserMark = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userImageContainer}>
        <Image
          className={styles.avatar}
          src="/p1.jpeg"
          alt="user"
          width={60}
          height={60}
        />
      </div>
      <div className={styles.userTextContainer}>
        <span className={styles.username}>John Doe</span>
        <span className={styles.date}>01.01.2025</span>
      </div>
    </div>
  );
};

export default UserMark;
