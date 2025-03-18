import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const sphereRef2 = useRef<THREE.Mesh>(null);
  const sphereRef3 = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();

    if (sphereRef.current) {
      sphereRef.current.position.x = Math.sin(time * 0.3) * 2;
      sphereRef.current.position.y = Math.cos(time * 0.2) * 2;
      sphereRef.current.rotation.x = time * 0.2;
      sphereRef.current.rotation.y = time * 0.1;
    }

    if (sphereRef2.current) {
      sphereRef2.current.position.x = Math.cos(time * 0.4) * 3;
      sphereRef2.current.position.y = Math.sin(time * 0.3) * 3;
      sphereRef2.current.rotation.x = time * 0.3;
      sphereRef2.current.rotation.y = time * 0.2;
    }

    if (sphereRef3.current) {
      sphereRef3.current.position.x = Math.sin(time * 0.5) * 4;
      sphereRef3.current.position.y = Math.cos(time * 0.4) * 4;
      sphereRef3.current.rotation.x = time * 0.4;
      sphereRef3.current.rotation.y = time * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Sphere ref={sphereRef} args={[0.5, 32, 32]}>
        <meshStandardMaterial
          color="#4f46e5"
          roughness={0.3}
          metalness={0.8}
          wireframe
        />
      </Sphere>

      <Sphere ref={sphereRef2} args={[0.3, 32, 32]}>
        <meshStandardMaterial
          color="#8b5cf6"
          roughness={0.3}
          metalness={0.8}
          wireframe
        />
      </Sphere>

      <Sphere ref={sphereRef3} args={[0.2, 32, 32]}>
        <meshStandardMaterial
          color="#6366f1"
          roughness={0.3}
          metalness={0.8}
          wireframe
        />
      </Sphere>
    </>
  );
}