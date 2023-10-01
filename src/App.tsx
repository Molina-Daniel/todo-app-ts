import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'Learn React with TypeScript',
    completed: true
  },
  {
    id: '2',
    title: 'Learn React with TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Learn React with TypeScript',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  return (
    <div className='todoapp'>
        <Todos todos={todos} />
    </div>
  )
}

export default App
