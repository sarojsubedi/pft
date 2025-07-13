import { useState } from 'react'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Overview />
      <Dashboard />
    </>
  )
}

export default App
