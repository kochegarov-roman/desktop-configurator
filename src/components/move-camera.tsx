import {ICameraProperties} from "../types";
import {useThree} from "@react-three/fiber";
import {useEffect} from "react";

export const MoveCamera = ({ position, lookAt }: ICameraProperties) => {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(...position)
    camera.lookAt(...lookAt)
  }, [camera, position, lookAt])

  return null
}