import { useState } from 'react'
import Lessona from './Lesson4a'
import Lessonb from './Lesson4b'
import Lessonc from './Lesson4c'

function App() {
  const [lesson, setLesson] = useState("Lessona")

  const renderLesson = () => {
    switch (lesson) {
      case 'Lessona':
        return <Lessona />
      case 'Lessonb':
        return <Lessonb />
         case 'Lessonc':
        return <Lessonc />
      default:
        return null
    }
  }

  return (
  <div >
  <div className="flex gap-2 rounded-xl bg-gray-100 p-2">
    <button
      onClick={() => setLesson('Lessona')}
      className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition
        ${lesson === 'Lessona'
          ? 'bg-white text-blue-600 shadow'
          : 'text-gray-500 hover:bg-gray-200'
        }`}
    >
      1
    </button>

    <button
      onClick={() => setLesson('Lessonb')}
      className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition
        ${lesson === 'Lessonb'
          ? 'bg-white text-blue-600 shadow'
          : 'text-gray-500 hover:bg-gray-200'
        }`}
    >
      2
    </button>

     <button
      onClick={() => setLesson('Lessonc')}
      className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition
        ${lesson === 'Lessonb'
          ? 'bg-white text-blue-600 shadow'
          : 'text-gray-500 hover:bg-gray-200'
        }`}
    >
      3
    </button>
  </div>

  <div>
    {renderLesson()}
  </div>
</div>
  )
}

export default App
