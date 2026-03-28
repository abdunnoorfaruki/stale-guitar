"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Lights() {
  const dirLightRef = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    if (dirLightRef.current) {
      dirLightRef.current.shadow.mapSize.width = 2048;
      dirLightRef.current.shadow.mapSize.height = 2048;
      dirLightRef.current.shadow.bias = -0.0001;
    }
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        ref={dirLightRef}
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, -10, -10]} color="#4444ff" intensity={1} />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} />
    </>
  );
}
