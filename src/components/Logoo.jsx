

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';

export function Logoo(props) {
    const material = new THREE.MeshPhysicalMaterial({
  color: 0x000000, // set color to black
  roughness: 0, // set roughness to 0 for a shiny surface
  metalness: 0.7, // set metalness to 1 for a metallic surface
});
const material1 = new THREE.MeshStandardMaterial({
  color: 0x00FF00, // set color to green
 
});
const group = useRef()
const group1 = useRef()


 useFrame(({ clock }) => {
   group.current.rotation.x = Math.sin(clock.elapsedTime) * 0.2; 
   group.current.rotation.y += 0.01
   group1.current.rotation.y -= 0.01
   group1.current.rotation.x = -Math.sin(clock.elapsedTime) * 0.2; 

});

  const { nodes, materials } = useGLTF('/logo-transformed.glb')
  return (
    // <group {...props} dispose={null} position={[-0.1,0,-3.6]}>

    <group>
    <group {...props} dispose={null} position={[-2,0,0]}>
      
      <group ref={group1}  scale={0.0075}>
        <group position={[20.16, 33.66, 4.04]}>
          <mesh castShadow geometry={nodes.Shape_0.geometry} material={material} position={[-80, 60.25, -4.04]} />
          <mesh  geometry={nodes.Triangle.geometry} material={material1} position={[1.08, 35.02, 3.04]} />
          <mesh geometry={nodes.Triangle_2.geometry} material={material1} position={[1.08, 16.66, 3.04]} rotation={[0, 0, -Math.PI]} />
        </group>
        <OrthographicCamera makeDefault={false} far={100000} near={0} position={[0, 0, 1000]} />
      </group>
    </group>
        <group {...props} dispose={null} position={[2,0,0]}>
      
      <group ref={group}  scale={0.0075}>
        <group position={[20.16, 33.66, 4.04]}>
          <mesh castShadow geometry={nodes.Shape_0.geometry} material={material} position={[-80, 60.25, -4.04]} />
          <mesh  geometry={nodes.Triangle.geometry} material={material1} position={[1.08, 35.02, 3.04]} />
          <mesh geometry={nodes.Triangle_2.geometry} material={material1} position={[1.08, 16.66, 3.04]} rotation={[0, 0, -Math.PI]} />
        </group>
        <OrthographicCamera makeDefault={false} far={100000} near={0} position={[0, 0, 1000]} />
      </group>
    </group>
    </group>
  )
}

useGLTF.preload('/logo-transformed.glb')
