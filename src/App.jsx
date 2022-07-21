import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { UsersProvider } from './context/UserContext'
import { Datos } from './components/datos'

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
    <UsersProvider>
      <Datos/>
      <div className="App">
        <div className="card">
          <button onClick= { handleClick }>
            count is {count}
          </button>
        </div>
      </div>
    </UsersProvider>
  )
}

export default App
