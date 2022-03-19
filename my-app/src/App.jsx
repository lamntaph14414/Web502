import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/Show'


function App() {
  const [count, setCount] = useState<number>("Lam")

  return (
    <div className="App">
      <ShowInfo name="Lam"/>
    </div>
  )
}

export default App
