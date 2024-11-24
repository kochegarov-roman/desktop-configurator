import { ChangeEvent, useContext, useState } from 'react'
import { initialDeskSizeProperties } from '../constants'
import { actions, DeskContext } from '../store/DeskContext'
import { ISize } from '../types'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'

export const DeskSizeSettings = ({}: {}) => {
  const context = useContext(DeskContext)
  if (!context) return <ContextNotFoundError />

  const { dispatch } = context

  const handleSizeChange = (name: string, value: number) => {
    dispatch(actions.updateSize(name, value))
  }

  return Object.entries(initialDeskSizeProperties).map(
    ([name, sizeProperty]) => (
      <Size
        sizeProperty={sizeProperty}
        name={name}
        changeSizeCallback={handleSizeChange}
        key={name}
      />
    )
  )
}

interface IDeskSizeProps {
  sizeProperty: { size: ISize; title: string }
  name: string
  changeSizeCallback: (propertyName: string, propertyValue: number) => void
}

const Size = ({ sizeProperty, name, changeSizeCallback }: IDeskSizeProps) => {
  const [size, setSize] = useState<number>(sizeProperty.size.min)

  const onChangeSizeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    setSize(newValue)
    changeSizeCallback(name, newValue)
  }

  return (
    <div>
      <p>{sizeProperty.title}</p>
      <div className="flex gap-3">
        <div style={{ width: '50px' }}>{size}</div>
        <div>
          <input
            type="range"
            id="desk-width"
            onChange={onChangeSizeHandler}
            name="desk-width"
            min={sizeProperty.size.min}
            max={sizeProperty.size.max}
            step="1"
          />
        </div>
      </div>
    </div>
  )
}
