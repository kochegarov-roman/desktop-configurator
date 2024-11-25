import { IMaterial } from '../../types'

interface IDeskTopPlaneProps {
  materialProperties: IMaterial
}

export const DesktopPlane = (props: IDeskTopPlaneProps) => {
  return (
    <div
      className="h-4 p-5 cursor-pointer desk-top-material"
      style={{ background: props.materialProperties.color }}
    ></div>
  )
}