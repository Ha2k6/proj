import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Navigation } from './components/Navigation';
import { Products } from './components/Products';
import { Suspense } from 'react';

function App() {
  return (
    <div className="relative bg-black">
      <div className="fixed inset-0">
        <Canvas className="h-full w-full">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Products />
      </div>
    </div>
  );
}

export default App;