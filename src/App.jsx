import { useState } from 'react'
import CleliaAppLogo from './assets/CleliaAppLogo.png'
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
    <img src={CleliaAppLogo}/>
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
