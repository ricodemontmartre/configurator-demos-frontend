import React from 'react'
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import vertexShader from "@/components/three/shaders/default/vertexShader.glsl";
import fragmentShader from "@/components/three/shaders/default/fragmentShader.glsl";

const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  // vertex shader
  vertexShader,
  // fragment shader
  fragmentShader,
)

extend({ ColorShiftMaterial })

function Plane() {
  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      <colorShiftMaterial />
    </mesh>
  )
}

/* function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  )
} */

export default function PrintedCircuitBoardScene() {
  return (
    <>
        {/* <Box /> */}
        <Plane />
    </>
  )
}
