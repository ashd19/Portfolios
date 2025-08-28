import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Pokemon_firered_-_players_room";

const HeroModel = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 5, 25], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={5}
        maxDistance={20}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
    <group
    scale ={isMobile ? 0.7 : 1}
    >

    </group>
      <Model />
    </Canvas>
  );
};

export default HeroModel;
