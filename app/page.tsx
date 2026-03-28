"use client";
import dynamic from "next/dynamic";
import Overlay from "./components/overlay";

const Scene = dynamic(() => import("./scene"), { ssr: false });

export default function Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Scene />
      <Overlay />
    </div>
  );
}
