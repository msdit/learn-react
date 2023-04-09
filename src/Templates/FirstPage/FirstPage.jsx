import styles from './FirstPage.module.css'

function FirstPage() {
  return <h2>This is the <span className={styles.highlightedText}>1st</span> page</h2>
}

export default FirstPage