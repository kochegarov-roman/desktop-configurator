import { useContext } from 'react'
import { DESKTOP_MATERIALS_DATA } from '../constants'
import {DesktopPlane} from '../components/ui/desktop-plane'
import { actions, DesktopContext } from '../store/DesktopContext'
import { IMaterial } from '../types'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'

export const DesktopMaterials = () => {
  const context = useContext(DesktopContext)
  if (!context) return <ContextNotFoundError />

  const { dispatch } = context
  const onClick = (value: IMaterial) => {
    dispatch(actions.changeMaterial(value))
  }

  return (
    <div className="flex gap-3 p-3 pt-5">
      {DESKTOP_MATERIALS_DATA.map((mat) => (
        <div onClick={() => onClick(mat)} key={mat.name}>
          <DesktopPlane materialProperties={mat} />
        </div>
      ))}
    </div>
  )
}
