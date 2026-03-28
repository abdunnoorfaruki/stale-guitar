"use client";
import { useRef } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { MeshWobbleMaterial } from "@react-three/drei";

export default function HeroMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const hoveredRef = useRef<boolean>(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
    }
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    hoveredRef.current = true;
    if (meshRef.current) {
      gsap.to(meshRef.current.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3, ease: "power2.out" });
    }
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    hoveredRef.current = false;
    if (meshRef.current) {
      gsap.to(meshRef.current.scale, { x: 1, y: 1, z: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      castShadow
      receiveShadow
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
      <MeshWobbleMaterial
        color="#7f5af0"
        metalness={0.8}
        roughness={0.2}
        factor={0.5}
        speed={1.5}
        emissive="#2cb67d"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}
