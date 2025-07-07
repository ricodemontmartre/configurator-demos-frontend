import React from 'react'
import { Canvas } from "@react-three/fiber";

import PrintedCircuitBoardScene from './PrintedCircuitBoardScene';

import styles from "./printed_circuit_board.module.scss";

export default function PrintedCircuitBoardCanvas() {
  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <PrintedCircuitBoardScene />
      </Canvas>
    </div>
  )
}
