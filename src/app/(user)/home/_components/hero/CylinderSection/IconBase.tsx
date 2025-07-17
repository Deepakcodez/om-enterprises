import { RoundedBox, useTexture } from '@react-three/drei'
import React, { useMemo } from 'react'
import * as THREE from 'three'

export default function IconBase () {
  const texture = useTexture('/node.png')

  // Create materials for each side
  const materials = useMemo(() => {
    const solidMaterial = new THREE.MeshBasicMaterial({
      color: 0x242424,
      transparent: false
    })

    const texturedMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      toneMapped: false
    })

    return [
      solidMaterial, // Right
      solidMaterial, // Left
      solidMaterial, // Top
      solidMaterial, // Bottom
      texturedMaterial, // Front
      texturedMaterial // Back
    ]
  }, [texture])

  return (
    <RoundedBox args={[1, 1, 0.4]} radius={0.1} smoothness={4}>
      {materials.map((material, index) => (
        <primitive key={index} object={material} attach={`material-${index}`} />
      ))}
    </RoundedBox>
  )
}
