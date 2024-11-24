import { HOLE_VARIANTS } from '../constants'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import { Label } from '../components/ui/label'
import { useContext } from 'react'
import { actions, DesktopContext } from '../store/DesktopContext'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'

export const HoleVariants = () => {
  const context = useContext(DesktopContext)
  if (!context) return <ContextNotFoundError />

  const {
    dispatch,
    state: { hole }
  } = context

  const setHole = (holeShape: string | null) => {
    dispatch(actions.setHole(holeShape))
  }

  return (
    <RadioGroup onValueChange={setHole} defaultValue={hole.holeShape || ''}>
      {HOLE_VARIANTS.map((hole, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <RadioGroupItem
            value={hole.holeShape || ''}
            id={hole.holeShape || ''}
          />
          <Label htmlFor={hole.holeShape || ''}>{hole.title}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
