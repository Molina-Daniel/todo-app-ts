import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  onClearCompleted: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount,
  filterSelected,
  handleFilterChange
}) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> Pending ToDos
            </span>

            <Filters
                filterSelected={filterSelected}
                handleFilterChange={handleFilterChange}
            />
        </footer>
  )
}
