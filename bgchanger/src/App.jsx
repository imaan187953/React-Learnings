import { useState } from "react"

function App() {
  const [color, setColor] = useState("bg-green-700")

  return (
    <div className={`w-full h-screen duration-200 ${color}`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("bg-red-500")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500"
          >Red</button>
           <button
           onClick={() => setColor("bg-green-500")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500"
          >Green</button>
           <button
           onClick={() => setColor("bg-blue-500")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500"
          >Blue</button>
           <button
           onClick={() => setColor("bg-yellow-500")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500"
          >Yellow</button>
           <button
           onClick={() => setColor("bg-gray-500")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-500"
          >Gray</button>
           <button
           onClick={() => setColor("bg-purple-500")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500"
          >Purple</button>
           <button
           onClick={() => setColor("bg-teal-500")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-teal-500"
          >Teal</button>
          <button
           onClick={() => setColor("bg-white-500")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white-500"
          >White</button>
        </div>
      </div>
    </div>
  )
}

export default App
