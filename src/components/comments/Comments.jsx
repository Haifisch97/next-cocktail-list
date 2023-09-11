import styles from './comments.module.css'
import Link from 'next/link'
import SingleComment from '../singleComment/SingleComment'

const Comments = () => {
    const status = 'authenticated'
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
            <textarea placeholder='Write a comment...' rows={4} className={styles.input}></textarea>
            <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link className={styles.loginLink} href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <SingleComment />
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
    </div>
  )
}

export default Comments
