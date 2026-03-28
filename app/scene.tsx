"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Lights from "./components/lights";
import HeroMesh from "./components/hero-mesh";
import Particles from "./components/particles";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas className="w-full h-screen" camera={{ position: [0, 0, 8], fov: 60 }} shadows>
      <color attach="background" args={["#0a0a0f"]} />
      <Suspense fallback={null}>
        <Lights />
        <HeroMesh />
        <Particles />
        <Stars radius={100} depth={50} count={3000} factor={4} fade speed={1} />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
