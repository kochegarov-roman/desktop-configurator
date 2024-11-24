import { useContext } from 'react'
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group'
import { actions, DeskContext } from '../store/DeskContext'
import { propsData } from '../constants'
import { IProp } from '../types'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'

export const PropsVariants = () => {
  const context = useContext(DeskContext)
  if (!context) return <ContextNotFoundError />

  const { dispatch } = context
  const onClick = (value: IProp) => {
    dispatch(actions.changeProp(value))
  }

  return (
    <ToggleGroup type="single" variant="outline" className="justify-start">
      {propsData.map((prop) => (
        <ToggleGroupItem
          value={prop.path}
          key={prop.path}
          aria-label={prop.name}
          onClick={() => onClick(prop)}
        >
          <span>{prop.name}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
