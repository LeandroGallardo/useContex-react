import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount((count) => count + 1)
    try {
      window.localStorage.setItem('count', JSON.stringify(count));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="App">
      <h1>holiwi</h1>
      <div className="card">
        <button onClick= { handleClick }>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
