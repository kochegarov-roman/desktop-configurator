import React, { useContext } from 'react'
import { deskTopMaterialsData } from '../constants'
import DesktopPlane from '../components/ui/desktop-plane'
import { actions, DeskContext } from '../store/DeskContext'
import { IMaterial } from '../types'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'

export const DeskTopMaterials = () => {
  const context = useContext(DeskContext)
  if (!context) return <ContextNotFoundError />

  const { dispatch } = context
  const onClick = (value: IMaterial) => {
    dispatch(actions.changeMaterial(value))
  }

  return (
    <div className="flex gap-3 p-3 pt-5">
      {deskTopMaterialsData.map((mat) => (
        <div onClick={() => onClick(mat)} key={mat.name}>
          <DesktopPlane materialProperties={mat} />
        </div>
      ))}
    </div>
  )
}
