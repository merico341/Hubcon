import { useState } from 'react'
import '../css/App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='font-black text-purple-2 text-6xl'>Hello World!</h1>
        <button className="p-4 bg-blue-2 text-green rounded-2xl" onClick={() => setCount((count) => count + 1)}>
          your count is {count}
        </button>
      </div>
    </>
  )
}

