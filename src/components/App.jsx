import { useState } from 'react'
import { BarMenu } from './BarMenu.jsx'

import '../styles/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BarMenu />
    </>
  )
}

export default App
