'use client';
import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { FBXLoader } from "three/examples/jsm/Addons.js";

export default function Model3d() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const container = sceneRef.current;
    const width = 500;
    const height = 500;

    // Crear la escena y la cámara
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({alpha:true});


    // Establecer el tamaño del renderizador
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Agregar luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Luz ambiental suave
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz direccional
    directionalLight.position.set(-1, 1, 1); // Dirección de la luz
    scene.add(directionalLight);

    // Cargar textura
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/3d/textures/bud.jpg", () => {
      console.log("Textura cargada");
    });

    let loadedModel: THREE.Object3D | null = null;

    // Cargar modelo FBX
    const loader = new FBXLoader();
    loader.load(
      "/3d/source/bud.fbx",
      (fbx) => {
        fbx.scale.set(0.06, 0.06, 0.06); // Escalar el modelo
        fbx.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // Asignar la textura a los materiales
            child.material.map = texture;
            child.material.needsUpdate = true;
          }
        });

        fbx.rotation.z = Math.PI;
        fbx.rotation.x = Math.PI/2;
        fbx.rotation.y =-3*Math.PI/4;

        loadedModel = fbx; // Guardar el modelo para animar
        scene.add(fbx); // Agregar el modelo a la escena
      },
      (progress) => {
        console.log(`Cargando: ${(progress.loaded / progress.total) * 100}%`);
      },
      (error) => {
        console.error("Error al cargar el modelo:", error);
      }
    );

    // Posicionar la cámara
    camera.position.z = 2;
    camera.position.x = -1; 
    camera.position.y = 1; 

    // Animar la escena
    const animate = () => {
      requestAnimationFrame(animate);

      // Hacer girar el modelo sobre el eje Z
      if (loadedModel) {
        loadedModel.rotation.z += 0.008; // Ajustar la velocidad de rotación aquí
      }

      renderer.render(scene, camera);
    };
    animate();

    // Limpiar recursos al desmontar el componente
    return () => {
      renderer.dispose();
      container?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={sceneRef} style={{ width: '400px', height: '400px' }}></div>;
}
