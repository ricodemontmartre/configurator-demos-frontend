"use client";

import * as THREE from "three";
import { Canvas, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import vertexShader from "@/components/three/shaders/default/vertexShader.glsl";
import fragmentShader from "@/components/three/shaders/default/fragmentShader.glsl";

/* const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec3 color;
  varying vec2 vUv;
  
  void main() {
	  gl_FragColor = vec4(vUv, 1.0, 1.0);
  }
`; */

import styles from "./page.module.scss";

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

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {/* <Box /> */}
        <Plane />
      </Canvas>
    </div>
  );
}