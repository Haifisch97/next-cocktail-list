import styles from "./homepage.module.css";
import Category from "@/components/category/Category";
import CardList from "@/components/cardList/CardList";
import SideMenu from "@/components/sideMenu/SideMenu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Category />
      <div className={styles.content}>
        <CardList />
        <SideMenu />
      </div>
    </div>
  );
}
