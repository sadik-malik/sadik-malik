import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { IS_AVAILABLE_FOR_PROJECTS } from "../constants";

function NetworkMesh() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 1000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.z = time * 0.02;

    // Add some mouse interaction
    const mouseX = state.mouse.x * 0.2;
    const mouseY = state.mouse.y * 0.2;
    pointsRef.current.position.x = THREE.MathUtils.lerp(
      pointsRef.current.position.x,
      mouseX,
      0.1,
    );
    pointsRef.current.position.y = THREE.MathUtils.lerp(
      pointsRef.current.position.y,
      mouseY,
      0.1,
    );
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const DigitalCore = () => {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#3b82f6" wireframe />
      </mesh>
      <mesh scale={[1.2, 1.2, 1.2]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          wireframe
          opacity={0.2}
          transparent
        />
      </mesh>
    </group>
  );
};

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <NetworkMesh />
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <DigitalCore />
          </Float>
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4">
        {IS_AVAILABLE_FOR_PROJECTS ? (
          <div className="mb-4 inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">
              Available for Projects
            </span>
          </div>
        ) : null}
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
          SADIK <span className="text-blue-500">MALIK</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
          Software Engineer building responsive, user-friendly, and maintainable
          digital experiences.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-white rounded-lg font-bold transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
