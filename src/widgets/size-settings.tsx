import { useContext } from 'react'
import {INITIAL_DESKTOP_SIZE_PROPERTIES, SIZE_UNIT} from '../constants'
import { actions, DesktopContext } from '../store/DesktopContext'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'
import {SizeElement} from "./size-element";

export const DesktopSizeSettings = ({}: {}) => {
  const context = useContext(DesktopContext)
  if (!context) return <ContextNotFoundError />

  const {
    dispatch,
    state: { width, height, depth }
  } = context

  const handleSizeChange = (name: string, value: number) => {
    dispatch(actions.updateSize(name, value/SIZE_UNIT))
  }

  return Object.entries(INITIAL_DESKTOP_SIZE_PROPERTIES).map(
    ([name, sizeProperty]) => (
      <SizeElement
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
