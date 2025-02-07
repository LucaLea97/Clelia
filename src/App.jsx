import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <h1>Clelia</h1>
    </header>
    <main>
    <button> Lock </button>
    <button> Unlock </button>
    <img src="assets/react.svg" 
      alt="Red"
      width="2500"
      height="2500"/>
    <img src="assets/CleliaAppLogo.png" alt="Logo"/>
    <aside>
    <button> Map </button>
    <button> Controls </button>
    </aside>
    </main>
    <footer>Lea Renergy s.r.l.</footer>
    </>

  )
}

export default App
