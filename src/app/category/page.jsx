import styles from './cateoryPage.module.css'
import SideMenu from '@/components/sideMenu/SideMenu'
import CardList from '@/components/cardList/CardList'
const CategoryPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Long Drink Category</h1>
      <div className={styles.content}>
        <CardList/>
        <SideMenu/>
      </div>
    </div>
  )
}

export default CategoryPage
