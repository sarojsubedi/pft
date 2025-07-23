import { useState } from 'react'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Dashboard from './components/Dashboard'
import SupabaseTest from './components/SupabaseTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Overview />
      <Dashboard />
      <SupabaseTest/>
    </>
  )
}

export default App
