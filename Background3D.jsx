import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Particles() {
  const ref = useRef();
  // 5000 random points scattered in a wide sphere (5000 points * 3 coordinates each = 15000)
  const sphere = random.inSphere(new Float32Array(15000), { radius: 12 });

  useFrame((state, delta) => {
    const scrollY = window.scrollY;
    // Base slow rotation plus scroll-based 3D rotation and movement
    ref.current.rotation.x = -scrollY * 0.0005 - state.clock.elapsedTime * 0.02;
    ref.current.rotation.y = scrollY * 0.0005 - state.clock.elapsedTime * 0.03;
    ref.current.position.y = scrollY * 0.002;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  );
}
