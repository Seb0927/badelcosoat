import { useState } from 'react'
import Navbar from './components/Navbar'
import Badelco from './components/Placeholder'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Placeholder from './components/Placeholder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Placeholder />
    </>
  )
}

export default App
