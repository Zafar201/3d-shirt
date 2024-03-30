import { useEffect, useRef } from 'react'
// import { easing } from 'maath'
import {  useThree } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();
  const { gl } = useThree(); // Access the renderer

  // Set the clear color to white
  useEffect(() => {
     gl.setClearColor('#ffffff', 1);
  }, [gl]);

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.60}
        ambient={0.12}
        position={[5, 5, -10]}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.55}
        ambient={0.10}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop