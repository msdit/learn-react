import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './FirstPage.module.css'

const names = ['masoud', 'abbas', 'seyed']

function FirstPage() {
  const [counter, setCounter] = useState(0)
  const [isDoubleShown, setIsDoubleShown] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const inputRef = useRef()

  useEffect(() => {
    console.log('Mounted')
  }, [])

  useEffect(() => {
    console.log('ReRendered')
  })

  useEffect(() => {
    console.log('Counter changed')
    inputRef.current.value = ''
  }, [counter])

  const toggleDouble = () => {
    setIsDoubleShown(prev => !prev)
  }

  const increment = useCallback(() => {
    setCounter(counter + 1)
  }, [counter])

  const decrement = () => {
    setCounter(prev => prev - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  const addToCounter = () => {
    setCounter(prev => prev + +inputValue)
    setInputValue('')
  }

  const addToCounterWithRef = () => {
    console.log(inputRef?.current, Number(inputRef?.current.value));
    setCounter(prev => prev + Number(inputRef?.current.value))
    inputRef?.current.focus()
  }

  const onChange = (e) => {
    const val = e.target.value
    if (/^\d*$/.test(val)) {
      setInputValue(val)
    }
  }

  const double = counter * 2

  return <>
    <h2 className="blueColor">This is the <span className={styles.highlightedText}>1st</span> page</h2>
    {counter < 0 && <p>this is sub-zero</p>}
    <p className={counter > 0 ? styles.greenText : styles.redText}>{counter} - {isDoubleShown && double}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>reset</button>
    <button onClick={toggleDouble}>{isDoubleShown ? 'Hide' : 'Show'} Double</button>
    <hr />
    <h1>Controlled</h1>
    <input value={inputValue} onChange={onChange} />
    <button onClick={addToCounter}>Add</button>
    <hr />
    <h1>Uncontrolled</h1>
    <input ref={inputRef} />
    <button onClick={addToCounterWithRef}>Add</button>
    <ul>
    { names.map(el => <li key={el}>{el}</li>) }</ul>
  </>
}

export default FirstPage