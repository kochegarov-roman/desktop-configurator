import { Icon3D } from '../components/ui/icon-3d'
import { IconBox } from '../components/ui/icon-box'

export const Overlay = ({
  cameraLookStart
}: {
  cameraLookStart: () => void
}) => {
  return (
    <>
      <div className="absolute top-0 p-2.5">
        <Icon3D />
      </div>
      <div
        className="absolute bottom-0 right-0 p-2.5 cursor-pointer"
        onClick={cameraLookStart}
      >
        <IconBox />
      </div>
    </>
  )
}
