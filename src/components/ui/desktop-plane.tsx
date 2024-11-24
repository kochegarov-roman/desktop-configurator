import { IMaterial } from '../../types'

interface IDeskTopPlaneProps {
  materialProperties: IMaterial
}

const DesktopPlane = (props: IDeskTopPlaneProps) => {
  return (
    <div
      className="w-14 h-6 p-5 cursor-pointer desk-top-material"
      style={{ background: props.materialProperties.color }}
    ></div>
  )
}

export default DesktopPlane
