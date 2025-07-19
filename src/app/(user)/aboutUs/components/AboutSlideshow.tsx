'use client'
import React, { useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import SlideshowScene from './SlideshowScene'
import Image from 'next/image'
import { PerspectiveCamera } from 'three'
import galaxy from '../../../../../public/glaxy.png'
// Camera component with Leva controls
function ControlledCamera () {
  const { camera } = useThree()
  const controlsRef = useRef<any>(null)

  // Type guard to ensure it's a PerspectiveCamera
  const isPerspectiveCamera = (c: any): c is PerspectiveCamera =>
    (c as PerspectiveCamera).isPerspectiveCamera

  // Leva controls configuration
  const { position, fov, zoom } = useControls('Camera', {
    position: {
      value: [0, 0, 4.5],
      step: 0.1
    },
    fov: {
      value: 45,
      min: 10,
      max: 100,
      step: 1
    },
    zoom: {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1
    },
    autoRotate: false
  })

  // Apply controls to camera
  React.useEffect(() => {
    camera.position.set(position[0], position[1], position[2])

    if (isPerspectiveCamera(camera)) {
      camera.fov = fov
    }

    camera.zoom = zoom
    camera.updateProjectionMatrix()

    if (controlsRef.current) {
      controlsRef.current.update()
    }
  }, [position, fov, zoom, camera])

  return <OrbitControls ref={controlsRef} makeDefault />
}

export default function AboutSlideshow () {
  return (
    <div className='h-[30rem] w-full relative overflow-hidden'>
      <Leva collapsed hidden />
      <Canvas
        className='h-full w-full bg-slate-900'
        // style={{
        //   backgroundImage: `url(${galaxy.src})`,
        //   // backgroundColor: '#000',
        //   backgroundAttachment: 'fixed',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover'
        // }}
        camera={{
          fov: 45,
          position: [0, 0, 1],
          near: 0.1,
          far: 1000
        }}
      >
        <ControlledCamera />
        <ambientLight intensity={5} />
        <SlideshowScene />
      </Canvas>
      <Image
        src='/yelllowbar.png'
        alt='Slideshow Background'
        height={200}
        width={200}
        quality={100}
        className='absolute bottom-0 left-0  h-12'
      />
      <div className='absolute bottom-0 md:right-12 right-2 text-OMblue text-xl font-bold px-4 py-1 bg-white rounded-t-2xl'>
        ABOUT
      </div>

    </div>
  )
}
