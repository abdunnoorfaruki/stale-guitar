"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SparklesIcon } from "lucide-react";

export default function Overlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none">
      <div className="pointer-events-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
            Simple 3D Landing
          </span>
          <SparklesIcon className="w-10 h-10 text-fuchsia-400 animate-pulse" />
        </div>
        <p className="text-lg md:text-2xl text-zinc-200 max-w-xl text-center">
          Experience a modern, interactive landing page powered by Three.js, React Three Fiber, and GSAP.
        </p>
        <Button className={cn("px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-fuchsia-500 to-green-400 text-white shadow-lg hover:scale-105 transition-transform duration-200")}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
