import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

const RobotModel = () => {
  const robotRef = useRef<THREE.Group>(null);
  
  // Make the robot look around slightly based on mouse
  useFrame((state) => {
    if (robotRef.current) {
      robotRef.current.rotation.y = THREE.MathUtils.lerp(
        robotRef.current.rotation.y,
        (state.pointer.x * Math.PI) / 6,
        0.05
      );
      robotRef.current.rotation.x = THREE.MathUtils.lerp(
        robotRef.current.rotation.x,
        (-state.pointer.y * Math.PI) / 8,
        0.05
      );
      // float manually
      robotRef.current.position.y = -0.2 + Math.sin(state.clock.elapsedTime * 2.5) * 0.1;
    }
  });

  // Product-Company Premium: Frosted Purple Acrylic / Glassmorphism
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: '#a855f7', // Portfolio Purple base
    transmission: 0.85, // Glass effect
    opacity: 1,
    metalness: 0.1,
    roughness: 0.15, // Smooth frosted finish
    ior: 1.5, // Refraction index like glass
    thickness: 1.5, // Volume for light to scatter
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  });

  // Product-Company Premium: Frosted Cyan Acrylic 
  const accentMaterial = new THREE.MeshPhysicalMaterial({
    color: '#22d3ee', // Portfolio Cyan base
    transmission: 0.85, 
    opacity: 1,
    metalness: 0.1,
    roughness: 0.15, 
    ior: 1.5,
    thickness: 1.5,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  });

  // Clean, high-end Polished Chrome for the internal mechanisms
  const jointMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    metalness: 0.9,
    roughness: 0.1,
  });

  // Create a custom glow texture using standard Canvas 2D API for a soft floor lighting effect
  const glowTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    if (context) {
      const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, 128, 128);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  return (
      <group ref={robotRef} position={[0, -0.2, 0]}>
        {/* Head */}
        <mesh position={[0, 0.8, 0]} material={bodyMaterial}>
          <boxGeometry args={[0.6, 0.45, 0.45]} />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.15, 0.85, 0.23]}>
          <boxGeometry args={[0.1, 0.05, 0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.15, 0.85, 0.23]}>
          <boxGeometry args={[0.1, 0.05, 0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 0.55, 0]} material={accentMaterial}>
          <cylinderGeometry args={[0.08, 0.08, 0.2]} />
        </mesh>

        {/* Torso */}
        <mesh position={[0, 0.05, 0]} material={bodyMaterial}>
          <boxGeometry args={[0.8, 0.9, 0.5]} />
        </mesh>
        
        {/* Arms */}
        <group position={[-0.5, 0.3, 0]}>
          <mesh position={[0, -0.3, 0]} material={accentMaterial}>
            <cylinderGeometry args={[0.08, 0.06, 0.6]} />
          </mesh>
          <mesh material={jointMaterial}>
            <sphereGeometry args={[0.12]} />
          </mesh>
        </group>
        <group position={[0.5, 0.3, 0]}>
          <mesh position={[0, -0.3, 0]} material={accentMaterial}>
            <cylinderGeometry args={[0.08, 0.06, 0.6]} />
          </mesh>
          <mesh material={jointMaterial}>
            <sphereGeometry args={[0.12]} />
          </mesh>
        </group>

        {/* Floating Thruster Base & Repulsor Glow */}
        <mesh position={[0, -0.5, 0]} material={jointMaterial}>
          <cylinderGeometry args={[0.25, 0.15, 0.3]} />
        </mesh>
        <mesh position={[0, -0.65, 0]}>
          <cylinderGeometry args={[0.1, 0.0, 0.3]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
        </mesh>
        {/* Downward thruster light */}
        <pointLight position={[0, -0.8, 0]} intensity={2.0} distance={2.5} color="#22d3ee" />

        {/* Floor Glow / Shadow (Not affected by robot group movement but floats underneath!) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
          <planeGeometry args={[3.5, 3.5]} />
          <meshBasicMaterial 
            map={glowTexture} 
            color="#22d3ee" 
            transparent={true} 
            opacity={0.6} 
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
  );
};

const ContactRobot = () => {
  return (
    <div className="w-48 h-48 md:w-64 md:h-64 cursor-pointer hover:scale-105 transition-transform duration-300">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} color="#ffffff" />
          <directionalLight position={[5, 10, 5]} intensity={2.0} color="#ffffff" />
          <directionalLight position={[-5, 5, -5]} intensity={1.0} color="#22d3ee" />
          <directionalLight position={[0, -5, -5]} intensity={0.8} color="#a855f7" />
          
          <RobotModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ContactRobot;
