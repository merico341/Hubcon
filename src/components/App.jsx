import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-row justify-around items-center m-10">
        <a className="size-30" href="https://vite.dev" target="_blank">
          <img src={viteLogo} className='logo size-full' alt="Vite logo" />
        </a>
        <a className="size-30" href="https://react.dev" target="_blank">
          <img src={reactLogo} className='logo size-full' alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs ">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
