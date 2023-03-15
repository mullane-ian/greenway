import * as React from "react";
import { Canvas, useFrame,useThree } from '@react-three/fiber'
import { OrbitControls, Preload,OrthographicCamera } from '@react-three/drei'
import { RoundedBox, Html } from "@react-three/drei";
import {lerp,remap } from "maath/misc";
import { Mosquito } from "../bugs/Mosquito";
import { Termite } from "../bugs/Termite";
import { Weed } from "../bugs/Weed";
import { Header } from "../dom/Header";
import * as THREE from 'three';
import Overlay from "../dom/Overlay";
import Modal from '../dom/Modal'
import { Logoo } from "../Logoo";
export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped

  return (
    <>
      {/* <Header /> */}
       <Canvas
        orthographic
      shadows
      dpr={[1, 2]}
      camera={{ position: [8, 8, 8], zoom: 200 }}
    >
      <color args={["#333337"]} attach="background" />
      <directionalLight
        position={[0, 20, 0]}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <React.Suspense fallback="">
        <Demos />
      </React.Suspense>
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
      >
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent opacity={0.5} />
      </mesh>
      {/* <MyOrthographicCamera  /> */}
      

      <OrbitControls enabled={false} />
      <MyChildComponent />
      <Logoo />
    </Canvas>
    
      <Overlay />
  
    </>
      // <Canvas {...props}>
    //   <directionalLight intensity={0.75} />
    //   <ambientLight intensity={0.75} />
    //   {children}
    //   <Preload all />
    //   <OrbitControls />
    // </Canvas>
     
  )
}
// function MyCamera() {
//   const { viewport, camera } = useThree();
//   const { width } = viewport;
//   //   useFrame(({ clock }) => {
//   //   const t = clock.elapsedTime;
//   //   const targetPos = new THREE.Vector3(8, 8, 8); // desired position
//   //   camera.position.lerp(targetPos, 0.1); // interpolate camera position towards target
//   // });

//   // Update camera properties based on viewport width
//   // React.useEffect(() => {
//   //   if (width * 10 < 198) {
//   //     camera.zoom = 1.25
//   //     console.log('hi' + width)
//   //   } else {
//   //     camera.position.set(4.5, 4.5, 4.5);
//   //     camera.zoom = 2.75

//   //     console.log('bye')
//   //   }
//   // }, [width, camera]);

//   return (
//     <OrthographicCamera shadows position={[8,8,8]} zoom={200} makeDefault />
//   );
// }

// function MyOrthographicCamera() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   const zoom = 10;

//   return (
//     <OrthographicCamera
//       makeDefault
//       position={[8, 2, 8]}
//       zoom={200}
//       // left={width / -2}
//       // right={width / 2}
//       // top={height / 2}
//       // bottom={height / -2}

//     />
//   );
// }

function MyChildComponent() {
  const { camera, viewport } = useThree();
  const myRef = React.useRef();

  // calculate the zoom value based on the viewport width
  
    // calculate the zoom value based on the viewport width
  const calculateZoom = () => {
    const zoom = viewport.width * 100 < 768 ? 100 : 200;
    camera.zoom = zoom;
    camera.updateProjectionMatrix();
  };

  // call the calculateZoom function when the viewport size changes
  React.useEffect(() => {
    calculateZoom();
    console.log(viewport.width * 100)
  }, [viewport]);

  

  // // set the camera's zoom value
  // camera.zoom = zoom;
  // camera.updateProjectionMatrix();

  // you can also assign the camera to a ref to manipulate its properties
  // myRef.current.rotation.y = 1;

  return (
    <group ref={myRef}>
      {/* add your child components here */}
    </group>
  );
}
function MyCamera(props) {
  return (
    <OrthographicCamera
      makeDefault={props.makeDefault}
      position={[8, 8, 8]}
     
      near={0.1}
      far={100}
    />
  );
}
function Demo({position,color,children}){
  // const { width, height } = React.useContext(ViewportContext) || {};
  // console.log(width)
  const [hover, setHover] = React.useState(false);
  const container = React.useRef();
    useFrame(({ clock }) => {
    if (hover) {
      container.current.position.z = lerp(
        container.current.position.z,
        remap(Math.sin(clock.getElapsedTime() * 3), [-1, 1], [-0.05, 0.05]),
        0.1
      );
    } else {
      container.current.position.z = lerp(container.current.position.z, 0, 0.1);
    }
  });
   const [showModal, setShowModal] = React.useState(false);

  // handle click event to open modal
  const handleOpenModalClick = () =>{
   setShowModal(true);
    // alert('hi')
  }

  
  return(

    <>         
    <group position={position} ref={container} >
      <mesh
        onPointerEnter={(e) => {
          setHover(true);
          e.stopPropagation();
        }}
        onPointerLeave={(e) => {
          setHover(false);
          e.stopPropagation();
        }}
  
      >
        <boxGeometry args={[1.5, 1.5, 1]} />
        <meshBasicMaterial
          transparent
          opacity={0}
          wireframe
          depthWrite={false}
        />
       <group scale={0.8} position={[0, 0, 0.3]}>
          {children}
        </group>

        <RoundedBox
          position={[0, 0, -0.25]}
          castShadow
          receiveShadow
          args={[1.5, 1.5, 0.1]}
          radius={0.05}
          smoothness={1}
          onClick={handleOpenModalClick}
        >
          <meshStandardMaterial color={color} />
        </RoundedBox>
        
      </mesh>
 
    
    </group>



     <Modal showModal={showModal} setShowModal={setShowModal} />
     
       
      
    </>
  )
}
function Demos() {
  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          
      <Demo slug={"points"} title={'Beat the Bite'} position={[-2, 0, 0]} color="#35764B" >
 
       <group scale={0.075} >
              <Mosquito rotation={[Math.PI/2,0,0]} />

        </group>
  
      </Demo>

      <Demo slug="circumcircle" title={'Weeds are for Losers!'} color="#E8E8E8">
     <group scale={0.8}>
                 <Weed position={[0.6,-0.7,-0.8]} rotation={[Math.PI/2,Math.PI/3,0]} scale={0.2}/>
                 <Weed position={[.8,.9,-0.8]} rotation={[Math.PI/2,Math.PI/1.5,0]} scale={0.2}/>
                 <Weed position={[-.6,0.7,-0.8]} rotation={[Math.PI/2,Math.PI/2,0]} scale={0.2}/>

        </group>

      </Demo>

      <Demo slug="convex-hull" title="termites are terrible!" position={[2, 0, 0]} color="#000000">
 <group scale={0.8}>
          <Termite rotation={[Math.PI/2,0,0]} position={[0,0,-1]}/>
        </group>
      </Demo>
    </group>
  );
}
