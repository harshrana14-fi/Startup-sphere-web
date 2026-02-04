"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type ThreeElements, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props: ThreeElements["points"]) => {
  const ref = useRef<PointsType | null>(null);
  
  // Simple fallback star generation to avoid NaN issues
  const positions = new Float32Array(5000 * 3);
  for (let i = 0; i < 5000; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 2.4; // x
    positions[i3 + 1] = (Math.random() - 0.5) * 2.4; // y
    positions[i3 + 2] = (Math.random() - 0.5) * 2.4; // z
  }

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- drei Points ref type mismatch with @types/three
        ref={ref as any}
        stride={3}
        positions={positions}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
