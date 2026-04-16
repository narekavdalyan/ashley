'use client';

import './style.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Dodecahedron({ position, color, size }) {

    const meshRef = useRef()

    useFrame(() => {
        meshRef.current.rotation.x -= 0.002
        meshRef.current.rotation.y -= 0.002
        meshRef.current.rotation.x -= 0.002
    })

    return (
        <mesh ref={meshRef} position={position}>
            <dodecahedronGeometry args={[size]} />   {/* radius = 2.5 */}
            <meshBasicMaterial
                color={color}
                wireframe
            wireframeLinewidth={4}
            />
        </mesh>
    );
}

export default function Home() {
    return (
        <main className="bg-black w-screen h-screen overflow-hidden home_1_bg">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

                <Dodecahedron position={[-15, 5, 0]} color={'#4D4D4D'} size={5} />
                <Dodecahedron position={[0, -5, 0]} color={'#4D4D4D'} size={2} />
                <Dodecahedron position={[15, 5, 0]} color={'#4D4D4D'} size={12} />

                {/* Պտտելու և zoom անելու համար */}
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minDistance={15}
                    maxDistance={20}
                />
            </Canvas>

        </main>
    );
}

export function Home2() {
    return (
        <main className="bg-black w-screen h-screen overflow-hidden home_1_bg">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

                <Dodecahedron position={[-13, 3, 0]} color={'#4D4D4D'} size={3} />
                <Dodecahedron position={[19, -3, 0]} color={'#4D4D4D'} size={6} />

                {/* Պտտելու և zoom անելու համար */}
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minDistance={15}
                    maxDistance={20}
                />
            </Canvas>

        </main>
    );
}

export function PersonalDodecahedron() {
    return (
        <main className="bg-black w-screen h-screen overflow-hidden home_1_bg">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                style={{ background: 'transparent' , pointerEvents: 'none' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

               
                <Dodecahedron position={[7, 4, 0]} color={'#4D4D4D'} size={6} />

                {/* Պտտելու և zoom անելու համար */}
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minDistance={15}
                    maxDistance={20}
                />
            </Canvas>
        </main>
    );
}