'use client'
import { useTexture, OrbitControls } from '@react-three/drei'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export default function CylinderScene () {
  const meshRef = useRef<THREE.Mesh>(null)
  const controlsRef = useRef<any>(null)
  const texture = useTexture('/cylindertexture.png')


   useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.minPolarAngle = Math.PI / 2
      controlsRef.current.maxPolarAngle = Math.PI / 2
      controlsRef.current.enableZoom = false
    }

    // Fix texture stretching by setting proper repeat and offset
    if (texture) {
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(1, 1) // Adjust these values based on your texture
      texture.offset.set(0, 0)
    }
  }, [texture])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 * 0.5
    }
  })


  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 * 0.5
    }
  })

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enableRotate={true}
        enableZoom={false} // Explicitly disable zoom
        autoRotate={false} // We'll handle auto-rotation manually
        minAzimuthAngle={-Infinity}
        maxAzimuthAngle={Infinity}
      />
      <mesh ref={meshRef} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[3, 3, 1, 80, 20, true]} />
        <meshBasicMaterial
          map={texture}
          transparent
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>
      <EffectComposer>
        <Bloom
          intensity={2.0} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={true}
        />
      </EffectComposer>
    </>
  )
}
