"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 20;
  const positions = Array.from({ length: count }, (_, i) => [
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 4,
  ]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#2cb67d" emissive="#7f5af0" emissiveIntensity={0.8} metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}
