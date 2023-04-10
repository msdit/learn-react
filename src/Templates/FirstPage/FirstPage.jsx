import { useState } from 'react'
import styles from './FirstPage.module.css'

const names = ['masoud', 'abbas', 'seyed']

function FirstPage() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(prev => prev + 1)
  }

  const decrement = () => {
    setCounter(prev => prev - 1)
  }

  console.log(counter);

  return <>
    <h2 className="blueColor">This is the <span className={styles.highlightedText}>1st</span> page</h2>
    {counter < 0 && <p>this is sub-zero</p>}
    <p className={counter > 0 ? styles.greenText : styles.redText}>{counter}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <ul>
    { names.map(el => <li key={el}>{el}</li>) }</ul>
  </>
}

export default FirstPage