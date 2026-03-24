import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ─── Shared signal (cross-canvas boundary without context) ───────────────────
export const serviceSignal = { hovered: -1 };

// ─── Vertex Shader ────────────────────────────────────────────────────────────
const vertexShader = `
uniform float uTime;
uniform vec3  uMouse;
uniform float uMorph;   // 0..1, how far we have morphed to target shape

attribute float aRandom;
attribute vec3  aTargetPos; // destination shape positions

varying float vDistance;

void main() {
    vUv = uv;

    // Lerp between current sphere and target shape
    vec3 morphed = mix(position, aTargetPos, uMorph);

    // Convert to world space
    vec4 worldPosition = modelMatrix * vec4(morphed, 1.0);

    // Mouse repulsion
    float dist     = distance(worldPosition.xyz, uMouse);
    float maxDist  = 2.0;
    float repulse  = smoothstep(maxDist, 0.0, dist);

    vec3 sphereCenter = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    vec3 dirOut       = normalize(worldPosition.xyz - sphereCenter + vec3(0.001));

    vec3 targetPos = worldPosition.xyz
        + (dirOut * repulse * 0.6)
        + (dirOut * sin(uTime * 1.5 + aRandom * 10.0) * 0.05);

    targetPos.y += sin(uTime * 0.5 + aRandom * 6.28) * 0.05;

    vec4 mvPosition = viewMatrix * vec4(targetPos, 1.0);

    gl_PointSize = (3.0 + repulse * 5.0 + aRandom * 2.5) * (8.0 / -mvPosition.z);
    gl_Position  = projectionMatrix * mvPosition;

    vDistance = repulse;
}
`;

// add varying vUv declaration that was missing in original
const vertexShaderFixed = vertexShader.replace(
    'uniform float uMorph;   // 0..1, how far we have morphed to target shape',
    `uniform float uMorph;   // 0..1, how far we have morphed to target shape
varying vec2 vUv;`
);

// ─── Fragment Shader ──────────────────────────────────────────────────────────
const fragmentShader = `
uniform vec3  uColor;
uniform float uOpacity;
varying float vDistance;

void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    if (d > 0.5) discard;

    float alpha     = pow(1.0 - d * 2.0, 1.8);
    vec3 finalColor = mix(uColor, vec3(1.0, 1.0, 1.0), vDistance * 0.8);

    gl_FragColor = vec4(finalColor, alpha * (0.6 + vDistance * 0.5) * uOpacity);
}
`;

// ─── Shape colours per service ────────────────────────────────────────────────
const SHAPE_COLORS = [
    '#ffffff', // 0 – Product Design  → Cube
    '#ffffff', // 1 – Development     → Sphere
    '#ffffff', // 2 – SEO & Strategy  → Pyramid
    '#ffffff', // 3 – Branding        → Torus
    '#ffffff', // 4 – Perf Marketing  → Wave
];

// ─── Shape generators ─────────────────────────────────────────────────────────
const R = 1.8; // base radius / half-size

function genSphere(n) {
    const pos = new Float32Array(n * 3);
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = phi * i;
        pos[i * 3] = Math.cos(theta) * radius * R + (Math.random() - 0.5) * 0.1;
        pos[i * 3 + 1] = y * R + (Math.random() - 0.5) * 0.1;
        pos[i * 3 + 2] = Math.sin(theta) * radius * R + (Math.random() - 0.5) * 0.1;
    }
    return pos;
}

function genCube(n) {
    const pos = new Float32Array(n * 3);
    const h = R * 0.9;
    for (let i = 0; i < n; i++) {
        const face = Math.floor(Math.random() * 6);
        const u = (Math.random() - 0.5) * 2 * h;
        const v = (Math.random() - 0.5) * 2 * h;
        if (face === 0) { pos[i * 3] = h; pos[i * 3 + 1] = u; pos[i * 3 + 2] = v; }
        else if (face === 1) { pos[i * 3] = -h; pos[i * 3 + 1] = u; pos[i * 3 + 2] = v; }
        else if (face === 2) { pos[i * 3] = u; pos[i * 3 + 1] = h; pos[i * 3 + 2] = v; }
        else if (face === 3) { pos[i * 3] = u; pos[i * 3 + 1] = -h; pos[i * 3 + 2] = v; }
        else if (face === 4) { pos[i * 3] = u; pos[i * 3 + 1] = v; pos[i * 3 + 2] = h; }
        else { pos[i * 3] = u; pos[i * 3 + 1] = v; pos[i * 3 + 2] = -h; }
    }
    return pos;
}

function genPyramid(n) {
    const pos = new Float32Array(n * 3);
    const h = R * 1.1;
    for (let i = 0; i < n; i++) {
        const t = Math.pow(Math.random(), 0.6); // bias toward base
        const y = -h / 2 + t * h;
        const rHere = ((h / 2 - y) / h) * R;
        const angle = Math.random() * Math.PI * 2;
        // Flat triangular cross-section – approximate with circle + noise
        const r = Math.random() * rHere;
        pos[i * 3] = Math.cos(angle) * r;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = Math.sin(angle) * r;
    }
    return pos;
}

function genTorus(n) {
    const pos = new Float32Array(n * 3);
    const bigR = R * 0.85;
    const tubeR = R * 0.28;
    for (let i = 0; i < n; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        pos[i * 3] = (bigR + tubeR * Math.cos(phi)) * Math.cos(theta);
        pos[i * 3 + 1] = (bigR + tubeR * Math.cos(phi)) * Math.sin(theta);
        pos[i * 3 + 2] = tubeR * Math.sin(phi);
    }
    return pos;
}

function genWave(n) {
    const pos = new Float32Array(n * 3);
    const cols = Math.ceil(Math.sqrt(n));
    const rows = Math.ceil(n / cols);
    const step = (R * 2) / cols;
    let k = 0;
    for (let r = 0; r < rows && k < n; r++) {
        for (let c = 0; c < cols && k < n; c++, k++) {
            const x = -R + c * step + (Math.random() - 0.5) * 0.05;
            const z = -R + r * step + (Math.random() - 0.5) * 0.05;
            const y = Math.sin(x * 1.8) * Math.cos(z * 1.8) * 0.7;
            pos[k * 3] = x;
            pos[k * 3 + 1] = y;
            pos[k * 3 + 2] = z;
        }
    }
    return pos;
}

const SHAPE_GENERATORS = [genCube, genSphere, genPyramid, genTorus, genWave];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ParticleSphere({ hoveredService = -1 }) {
    const pointsRef = useRef();
    const materialRef = useRef();
    const geoRef = useRef();
    const { mouse, camera } = useThree();

    const particleCount = 10000;

    // All 5 shape buffers pre-baked
    const shapes = useMemo(() =>
        SHAPE_GENERATORS.map(gen => gen(particleCount)),
        []);

    // Initial positions (sphere = shape index 1)
    const initPositions = useMemo(() => genSphere(particleCount), []);
    const randoms = useMemo(() => {
        const rnd = new Float32Array(particleCount);
        for (let i = 0; i < particleCount; i++) rnd[i] = Math.random();
        return rnd;
    }, []);

    // Target positions buffer (starts as sphere)
    const targetPositions = useMemo(() => new Float32Array(initPositions), [initPositions]);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(100, 100, 100) },
        uColor: { value: new THREE.Color('#ffffff') },
        uOpacity: { value: 1.0 },
        uMorph: { value: 0.0 },
    }), []);

    const mousePos = useMemo(() => new THREE.Vector3(), []);
    const morphTarget = useRef(0.0);
    const morphDir = useRef(1);   // 1 = morphing in, -1 = morphing back
    const lastService = useRef(-1);
    const targetColor = useRef(new THREE.Color('#ffffff'));

    useFrame((state) => {
        if (!pointsRef.current || !materialRef.current || !geoRef.current) return;

        // ── Read hovered service from prop or global signal ──────────────────
        const svc = hoveredService >= 0 ? hoveredService : serviceSignal.hovered;

        if (svc !== lastService.current) {
            lastService.current = svc;

            if (svc >= 0 && svc < SHAPE_GENERATORS.length) {
                // Copy new target positions into the attribute buffer
                const newTarget = shapes[svc];
                targetPositions.set(newTarget);
                geoRef.current.attributes.aTargetPos.needsUpdate = true;

                // Start morphing forward
                morphDir.current = 1;
                targetColor.current.set(SHAPE_COLORS[svc]);
            } else {
                // No service hovered → morph back to sphere (shape index 1)
                targetPositions.set(shapes[1]); // sphere
                geoRef.current.attributes.aTargetPos.needsUpdate = true;
                morphDir.current = 1;
                morphDir.current = 1;
                targetColor.current.set(SHAPE_COLORS[1]);
            }
            morphTarget.current = 0.0; // restart morph
        }

        // ── Animate morph value ──────────────────────────────────────────────
        const speed = 0.025;
        morphTarget.current = Math.min(morphTarget.current + speed, 1.0);
        // Smooth-step ease
        const t = morphTarget.current;
        uniforms.uMorph.value = t * t * (3 - 2 * t);

        // ── Lerp colour ──────────────────────────────────────────────────────
        uniforms.uColor.value.lerp(targetColor.current, 0.04);

        // ── Scroll behaviour (same as before) ────────────────────────────────
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const progressToServices = Math.min(Math.max(scrollY / vh, 0), 1);
        const progressOut = Math.min(Math.max((scrollY - vh * 1.5) / (vh * 0.5), 0), 1);
        const easeServices = progressToServices * progressToServices * (3 - 2 * progressToServices);
        const easeOut = progressOut * progressOut * (3 - 2 * progressOut);

        const isMobile = window.innerWidth < 1024;
        const targetScaleDest = isMobile ? 0.6 : 0.75;
        const baseTargetScale = THREE.MathUtils.lerp(1.0, targetScaleDest, easeServices);

        // Move to the left when entering the service section
        const targetXDest = isMobile ? 0 : -3.5;
        const targetX = THREE.MathUtils.lerp(0, targetXDest, easeServices);
        pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, targetX, 0.1);

        pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, THREE.MathUtils.lerp(0, -0.5, easeServices), 0.1);

        // Calculate "pop up" scale when cursor is touching sphere
        const distToMouse = mousePos.distanceTo(pointsRef.current.position);
        const isTouched = distToMouse < 2.5;
        const popUpFactor = isTouched ? 1.25 : 1.0;

        const targetScale = baseTargetScale * popUpFactor;
        pointsRef.current.scale.setScalar(THREE.MathUtils.lerp(pointsRef.current.scale.x, targetScale, 0.1));

        const targetOpacity = THREE.MathUtils.lerp(1.0, 0.0, easeOut);
        uniforms.uOpacity.value = THREE.MathUtils.lerp(uniforms.uOpacity.value, targetOpacity, 0.1);

        // ── Rotation ─────────────────────────────────────────────────────────
        pointsRef.current.rotation.y += 0.0015;
        pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;

        uniforms.uTime.value = state.clock.elapsedTime;

        // ── Mouse repulsion ───────────────────────────────────────────────────
        mousePos.set(
            (mouse.x * state.viewport.width) / 2,
            (mouse.y * state.viewport.height) / 2,
            0
        );
        uniforms.uMouse.value.lerp(mousePos, 0.08);
    });

    return (
        <group>
            <points ref={pointsRef}>
                <bufferGeometry ref={geoRef}>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particleCount}
                        array={initPositions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-aTargetPos"
                        count={particleCount}
                        array={targetPositions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-aRandom"
                        count={particleCount}
                        array={randoms}
                        itemSize={1}
                    />
                </bufferGeometry>
                <shaderMaterial
                    ref={materialRef}
                    vertexShader={vertexShaderFixed}
                    fragmentShader={fragmentShader}
                    uniforms={uniforms}
                    transparent={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </group>
    );
}
