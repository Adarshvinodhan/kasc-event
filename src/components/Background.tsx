import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

function AnimatedParticles() {
  const count = 2000;
  const particlesRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.random() * 100 - 50;
      const y = Math.random() * 100 - 50;
      const z = Math.random() * 100 - 50;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, []);

  useFrame(() => {
    const positions = particlesRef.current.geometry.attributes.position.array;

    let i = 0;
    for (let j = 0; j < positions.length; j += 3) {
      const particle = particles[i];
      particle.time += particle.speed;
      positions[j] = particle.x + Math.sin(particle.time) * particle.factor;
      positions[j + 1] = particle.y + Math.cos(particle.time) * particle.factor;
      positions[j + 2] = particle.z + Math.cos(particle.time) * particle.factor;
      i++;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.length * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#4f46e5"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-black via-indigo-950/30 to-black">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
        <AnimatedParticles />
        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  );
};

export default Background;