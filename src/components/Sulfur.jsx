import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';

useGLTF.preload('/3d/sulphur.glb');

const MoleculeModel = (props) => {
    const rotation = props.rotation;
    const position = props.position;

    const rotationSpeed = props.rotationSpeed;
    const positionSpeed = props.positionSpeed;
    const isBobbing = props.isBobbing;

    const group = useRef();
    const { nodes } = useGLTF('/3d/sulphur.glb');

    // initial rotation
    useEffect(() => {
        if (group.current) {
            group.current.rotation.x = rotation[0];
            group.current.rotation.y = rotation[1];
            group.current.rotation.z = rotation[2];
        }
    }, [rotation]);

    // initial position
    useEffect(() => {
        if (group.current) {
            group.current.position.x = position[0];
            group.current.position.y = position[1];
            group.current.position.z = position[2];
        }
    }, [position]);

    // Rotate the model every frame
    useFrame(() => {
      if (group.current) {
        group.current.rotation.x += rotationSpeed[0];
        group.current.rotation.y += rotationSpeed[1];
        group.current.rotation.z += rotationSpeed[2];

        group.current.position.x += positionSpeed[0];
        group.current.position.y += positionSpeed[1];
        group.current.position.z += positionSpeed[2];

        group.current.position.y = isBobbing ? Math.sin(Date.now() * 0.002) * 0.4 : 0;
      }
    });
  
    return (
      <group ref={group} dispose={null}>
        <primitive object={nodes.Scene} />
      </group>
    );
};

const Camera = (props) => {
    const cameraLookAt = props.cameraLookAt;
    const cameraPosition = props.cameraPosition;

    const cameraRef = useRef();
    const setInitialPosition = useRef(true);

    useFrame(() => {
        if (setInitialPosition.current && cameraRef.current) {
            cameraRef.current.lookAt(cameraLookAt[0], cameraLookAt[1], cameraLookAt[2]);
            setInitialPosition.current = false;
        }
    });

    return (
        <PerspectiveCamera ref={cameraRef} makeDefault position={cameraPosition} />
    );
};

export default function Sulfur(props) {
    const ambientLightStrength = props.ambientLightStrength || 1.5;
    const pointLightStrength = props.pointLightStrength || 12;
    const pointLightPosition = props.pointLightPosition || [0, 5, 5];

    const moleculeInitialRotation = props.moleculeInitialRotation || [0, -1, 0];
    const moleculeRotationSpeed = props.moleculeRotationSpeed || [0.005, 0.001, 0];
    const moleculeInitialPosition = props.moleculePosition || [0, 0, 0];
    const moleculePositionSpeed = props.moleculePositionSpeed || [0, 0, 0];

    const cameraPosition = props.cameraPosition || [7, 7, 7];
    const cameraLookAt = props.cameraLookAt || [0, 0, 0];

    const isBobbing = props.isBobbing || true;
    const style = props.style || { position: 'absolute', top: 0, left: 0, zIndex: -1 };

    return (
        <Canvas style={style}>
            <Camera cameraPosition={cameraPosition} cameraLookAt={cameraLookAt}/>
            <ambientLight intensity={ambientLightStrength}/>
            <pointLight position={pointLightPosition} intensity={pointLightStrength}/>
            <MoleculeModel 
                rotation={moleculeInitialRotation}
                rotationSpeed={moleculeRotationSpeed}
                position={moleculeInitialPosition}
                positionSpeed={moleculePositionSpeed}
                isBobbing={isBobbing}
            />
        </Canvas>
    );
}