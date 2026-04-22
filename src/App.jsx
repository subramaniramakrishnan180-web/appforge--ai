
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? {...t, done: !t.done} : t))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl p-6 mt-10">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">AppForge AI</h1>
        <p className="text-center text-gray-500 mb-6">A Smart To-Do App by Subramani</p>
        
        <div className="flex gap-2 mb-6">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Add a new task..."
          />
          <button onClick={addTodo} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Add
          </button>
        </div>

        <div className="space-y-2">
          {todos.map(todo => (
            <div key={todo.id} onClick={() => toggleTodo(todo.id)} 
              className={`p-3 rounded-lg cursor-pointer ${todo.done ? 'bg-green-100 line-through text-gray-500' : 'bg-gray-100'}`}>
              {todo.text}
            </div>
          ))}
        </div>
        
        {todos.length === 0 && (
          <p className="text-center text-gray-400 mt-8">No tasks yet. Add one above!</p>
        )}
      </div>
      
      <p className="text-center text-white/70 mt-6 text-sm">Developed by Subramani © 2026</p>
    </div>
  )
}

export default App


