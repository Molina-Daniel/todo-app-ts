import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  newTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ newTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    newTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
            className="new-todo"
            value={inputValue}
            onChange={(event) => { setInputValue(event.target.value) }}
            placeholder="What need to be done?"
            autoFocus
        />
    </form>
  )
}
