"use client";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { IsoScene } from "./Scene";
import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
const Light = () => {
  const dirLight = useRef();

  return (
    <>
      <directionalLight
        ref={dirLight}
        castShadow
        position={[3, 4, 3]}
        shadow-mapSize={[2048, 2048]}
        target-position={[0, 0, 0.5]}
        color="#dde"
        intensity={6}
      >
        <orthographicCamera attach="shadow-camera" args={[-2, 2, 2, -2]} />
      </directionalLight>
    </>
  );
};

function ThreeScene() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 40,
        near: 0.1,
        far: 1000,
        position: [3.8, 1.7, 2.8],
      }}
    >
      <Environment files={"/images/satara_night_no_lamps_1k.hdr"} blur={1.0} />
      <pointLight position={[0.75, 2, -2]} intensity={2} color="#fefecf" />
      <Light />

      <group position={[-0.4, -0.25, -0.4]}>
        <group rotation-y={Math.PI * 0.125} receiveShadow>
          <IsoScene />
        </group>
        <group
          position={[1.25, 0.053, 0.75]}
          scale={0.6}
          rotation-x={-Math.PI * 0.5}
          rotation-z={-Math.PI * 0.375}
        >
          <Avatar />
        </group>
      </group>
    </Canvas>
  );
}

export default ThreeScene;
