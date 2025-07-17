'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CylinderScene from './CylinderScene'

export default function MovingCylinder () {
  return (
    <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <CylinderScene />
    </Canvas>   
  )
}
