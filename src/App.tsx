import { useState } from 'react'
import { LinkForm} from './components/LinkForm'
import {LinkList } from './components/LinkList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
     <LinkForm/>
     <LinkList/>
      
     </div>
  )
}

export default App
