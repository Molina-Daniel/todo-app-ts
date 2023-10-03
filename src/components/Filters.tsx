import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = (
  { filterSelected, handleFilterChange }
) => {
  return (
        <ul className='filters'>
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                  const isSelected = key === filterSelected
                  const className = isSelected ? 'selected' : ''

                  return (
                        <li key={key}>
                            <a
                                className={className}
                                href={href}
                                onClick={(event) => {
                                  event.preventDefault()
                                  handleFilterChange(key as FilterValue)
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                  )
                })
            }
        </ul>
  )
}
