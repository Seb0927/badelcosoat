import { useState } from 'react'
import Navbar from './components/Navbar'
import Placeholder from './components/Placeholder'
import Form from './components/Form'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Placeholder />
      <Form />
    </>
  )
}

export default App
