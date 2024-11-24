import  { ChangeEvent, useContext } from 'react'
import { INITIAL_DESKTOP_SIZE_PROPERTIES } from '../constants'
import { actions, DesktopContext } from '../store/DesktopContext'
import { ISize, ISizeLimit } from '../types'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'
import { Badge } from '../components/ui/badge'

export const DesktopSizeSettings = ({}: {}) => {
  const context = useContext(DesktopContext)
  if (!context) return <ContextNotFoundError />

  const {
    dispatch,
    state: { width, height, depth }
  } = context

  const handleSizeChange = (name: string, value: number) => {
    dispatch(actions.updateSize(name, value))
  }

  return Object.entries(INITIAL_DESKTOP_SIZE_PROPERTIES).map(
    ([name, sizeProperty]) => (
      <Size
        sizeProperty={{
          ...sizeProperty,
          currentSize: { width, height, depth }
        }}
        name={name as 'width' | 'height' | 'depth'}
        changeSizeCallback={handleSizeChange}
        key={name}
      />
    )
  )
}

interface IDeskSizeProps {
  sizeProperty: { size: ISizeLimit; title: string; currentSize: ISize }
  name: 'width' | 'height' | 'depth'
  changeSizeCallback: (propertyName: string, propertyValue: number) => void
}

const Size = ({ sizeProperty, name, changeSizeCallback }: IDeskSizeProps) => {

  const onChangeSizeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    changeSizeCallback(name, newValue)
  }

  return (
    <div>
      <p>{sizeProperty.title}</p>
      <div className="flex gap-3">
        <div style={{ width: '50px' }}>
          <Badge variant="secondary">{sizeProperty.currentSize[name]}</Badge>
        </div>

        <div>
          <input
            type="range"
            data-testid={`desk-size-${name}`}
            id={`desk-size-${name}`}
            onChange={onChangeSizeHandler}
            name={`desk-size-${name}`}
            value={sizeProperty.currentSize[name]}
            min={sizeProperty.size.min}
            max={sizeProperty.size.max}
            step="1"
          />
        </div>
      </div>
    </div>
  )
}
