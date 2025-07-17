import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Earth() {
  const earthRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)
  
  // Load textures
  const [earthDayMap, earthCloudMap] = useTexture([
    '/earth-daymap-4k.jpg', // Replace with your actual paths
    '/earth-clouds-4k.jpg'  // Replace with your actual paths
  ])

  // Rotate earth and clouds
  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1 // Earth rotation
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.12 // Slightly faster cloud rotation
    }
  })

  return (
    <group>
      {/* Earth Sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2.4, 64, 64]} />
        <meshStandardMaterial 
          map={earthDayMap}
          metalness={0.1}
          roughness={0.7}
        />
      </mesh>
      
      {/* Cloud Layer (slightly larger and transparent) */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.45, 64, 64]} />
        <meshStandardMaterial 
          map={earthCloudMap}
          transparent={true}
          opacity={0.4}
          alphaMap={earthCloudMap}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}